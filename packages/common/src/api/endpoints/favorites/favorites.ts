/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Conduit API
 * Conduit API
 * OpenAPI spec version: 1.0.0
 */
import type { SingleArticleResponse } from '../../models';
import { customInstance } from '../../mutator/custom-instance';

/**
 * Favorite an article. Auth is required
 * @summary Favorite an article
 */
export const createArticleFavorite = (slug: string) => {
  return customInstance<SingleArticleResponse>({
    url: `/articles/${slug}/favorite`,
    method: 'post',
  });
};
/**
 * Unfavorite an article. Auth is required
 * @summary Unfavorite an article
 */
export const deleteArticleFavorite = (slug: string) => {
  return customInstance<SingleArticleResponse>({
    url: `/articles/${slug}/favorite`,
    method: 'delete',
  });
};
