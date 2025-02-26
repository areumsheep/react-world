/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Conduit API
 * Conduit API
 * OpenAPI spec version: 1.0.0
 */
import {
  faker
} from '@faker-js/faker'
import {
  rest
} from 'msw'

export const getGetProfileByUsernameMock = () => ({profile: {username: faker.random.word(), bio: faker.random.word(), image: faker.random.word(), following: faker.datatype.boolean()}})

export const getFollowUserByUsernameMock = () => ({profile: {username: faker.random.word(), bio: faker.random.word(), image: faker.random.word(), following: faker.datatype.boolean()}})

export const getUnfollowUserByUsernameMock = () => ({profile: {username: faker.random.word(), bio: faker.random.word(), image: faker.random.word(), following: faker.datatype.boolean()}})

export const getProfileMSW = () => [
rest.get('*/profiles/:username', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetProfileByUsernameMock()),
        )
      }),rest.post('*/profiles/:username/follow', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getFollowUserByUsernameMock()),
        )
      }),rest.delete('*/profiles/:username/follow', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUnfollowUserByUsernameMock()),
        )
      }),]
