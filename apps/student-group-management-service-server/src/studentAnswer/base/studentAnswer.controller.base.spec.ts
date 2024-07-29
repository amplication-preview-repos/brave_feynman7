import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { StudentAnswerController } from "../studentAnswer.controller";
import { StudentAnswerService } from "../studentAnswer.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  answerDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  selectedOption: "exampleSelectedOption",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  answerDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  selectedOption: "exampleSelectedOption",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    answerDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    selectedOption: "exampleSelectedOption",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  answerDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  selectedOption: "exampleSelectedOption",
  updatedAt: new Date(),
};

const service = {
  createStudentAnswer() {
    return CREATE_RESULT;
  },
  studentAnswers: () => FIND_MANY_RESULT,
  studentAnswer: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("StudentAnswer", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentAnswerService,
          useValue: service,
        },
      ],
      controllers: [StudentAnswerController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /studentAnswers", async () => {
    await request(app.getHttpServer())
      .post("/studentAnswers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        answerDate: CREATE_RESULT.answerDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /studentAnswers", async () => {
    await request(app.getHttpServer())
      .get("/studentAnswers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          answerDate: FIND_MANY_RESULT[0].answerDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /studentAnswers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentAnswers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentAnswers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentAnswers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        answerDate: FIND_ONE_RESULT.answerDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /studentAnswers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentAnswers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        answerDate: CREATE_RESULT.answerDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentAnswers")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
