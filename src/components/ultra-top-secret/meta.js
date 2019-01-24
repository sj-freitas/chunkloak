export const readPermissions = {

};

/**
 * For each component, it should have a {componentName}.meta file associated probably in the same folder.
 * The meta document should declare who can access the specific chunk, these validations are done by the
 * server as protected routes. These can return a 200 when forbidden to indicate a false positive 
 * (this should be configurable).
 * 
 * - There must be a server-side process that reads the .meta files and applies the route protection logic
 * to them.
 * - web-pack must rename the chunks to keep the same name as the files and their full relative URLs.
 * ---> probably already exists https://github.com/wikiwi/webpack-content-chunks
 * - 
 * 
 * 
 */
