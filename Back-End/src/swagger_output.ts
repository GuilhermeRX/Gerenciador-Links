const swaggerFile = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'REST API',
    description: '',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: [
    'http',
  ],
  tags: ['Login', 'User', 'Link'],
  paths: {
    '/login': {
      post: {
        tags: ['Login'],
        description: '',
        parameters: [],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
    },
    '/user': {
      post: {
        tags: ['User'],
        description: '',
        parameters: [],
        responses: {},
      },
      get: {
        tags: ['User'],
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/user/info': {
      get: {
        tags: ['User'],
        description: '',
        parameters: [
          {
            name: 'authorization',
            in: 'header',
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
    },
    '/user/{id}': {
      put: {
        tags: ['User'],
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {},
      },
      delete: {
        tags: ['User'],
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {},
      },
    },
    '/link': {
      post: {
        tags: ['Link'],
        description: '',
        parameters: [],
        responses: {},
      },
      get: {
        description: '',
        tags: ['Link'],
        parameters: [
          {
            name: 'authorization',
            in: 'header',
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
    },
    '/link/{id}': {
      get: {
        tags: ['Link'],
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {},
      },
      put: {
        tags: ['Link'],
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {},
      },
      delete: {
        tags: ['Link'],
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
          },
        ],
        responses: {},
      },
    },
  },
};

export default swaggerFile;