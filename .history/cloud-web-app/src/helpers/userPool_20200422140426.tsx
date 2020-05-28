import { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
  UserPoolId: '',
  ClientId: '7qek5dd5q4h2k7n9iu2t3j9sf5'
};

export default new CognitoUserPool(poolData);
