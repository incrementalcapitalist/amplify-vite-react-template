import { defineBackend } from '@aws-amplify/backend';
import { groqQueryFunction } from './groq-query-function/resource';
import { auth } from './auth/resource';
import { data } from './data/resource';

defineBackend({
  groqQueryFunction,
  auth,
  data,
});
