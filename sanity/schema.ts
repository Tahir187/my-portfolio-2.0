import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './schemaTypes/pageInfo'
import experience from './schemaTypes/experience';
import skill from './schemaTypes/skill';
import social from './schemaTypes/social';
import project from './schemaTypes/project';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageInfo,
    experience,
    skill,
    social,
    project,
  ],
}
