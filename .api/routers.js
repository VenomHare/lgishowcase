
// Imports
import * as _0_0 from "@api/root/src/api/rss.ts";
import * as configure from "@api/configure";

export const routeBase = "/src/api";

const internal  = [
  _0_0.default && {
        source     : "src/api/rss.ts?fn=default",
        method     : "use",
        route      : "/rss",
        path       : "/src/api/rss",
        url        : "/src/api/rss",
        cb         : _0_0.default,
      },
  _0_0.GET && {
        source     : "src/api/rss.ts?fn=GET",
        method     : "get",
        route      : "/rss",
        path       : "/src/api/rss",
        url        : "/src/api/rss",
        cb         : _0_0.GET,
      },
  _0_0.PUT && {
        source     : "src/api/rss.ts?fn=PUT",
        method     : "put",
        route      : "/rss",
        path       : "/src/api/rss",
        url        : "/src/api/rss",
        cb         : _0_0.PUT,
      },
  _0_0.POST && {
        source     : "src/api/rss.ts?fn=POST",
        method     : "post",
        route      : "/rss",
        path       : "/src/api/rss",
        url        : "/src/api/rss",
        cb         : _0_0.POST,
      },
  _0_0.PATCH && {
        source     : "src/api/rss.ts?fn=PATCH",
        method     : "patch",
        route      : "/rss",
        path       : "/src/api/rss",
        url        : "/src/api/rss",
        cb         : _0_0.PATCH,
      },
  _0_0.DELETE && {
        source     : "src/api/rss.ts?fn=DELETE",
        method     : "delete",
        route      : "/rss",
        path       : "/src/api/rss",
        url        : "/src/api/rss",
        cb         : _0_0.DELETE,
      }
].filter(it => it);

export const routers = internal.map((it) => {
  const { method, path, route, url, source } = it;
  return { method, url, path, route, source };
});

export const endpoints = internal.map(
  (it) => it.method?.toUpperCase() + "\t" + it.url
);

export const applyRouters = (applyRouter) => {
  internal.forEach((it) => {
    it.cb = configure.callbackBefore?.(it.cb, it) || it.cb;
    applyRouter(it);
  });
};

