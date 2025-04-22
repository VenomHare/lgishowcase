// vite.config.ts
import tailwindcss from "file:///F:/React/lgishowcase/node_modules/@tailwindcss/vite/dist/index.mjs";
import { defineConfig } from "file:///F:/React/lgishowcase/node_modules/vite/dist/node/index.js";
import react from "file:///F:/React/lgishowcase/node_modules/@vitejs/plugin-react/dist/index.mjs";
import ApiRoutes from "file:///F:/React/lgishowcase/node_modules/vite-plugin-api-routes/dist/index.js";
import flowbiteReact from "file:///F:/React/lgishowcase/node_modules/flowbite-react/dist/plugin/vite.js";
var vite_config_default = defineConfig({
  server: {
    port: 3e3,
    cors: true,
    proxy: {
      "/api/rsshub": {
        target: "https://rsshub.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/rsshub/, "")
      }
    }
  },
  plugins: [
    react(),
    ApiRoutes({
      routeBase: "./src/api"
    }),
    tailwindcss(),
    flowbiteReact()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxSZWFjdFxcXFxsZ2lzaG93Y2FzZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcUmVhY3RcXFxcbGdpc2hvd2Nhc2VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L1JlYWN0L2xnaXNob3djYXNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcblxyXG5pbXBvcnQgQXBpUm91dGVzIGZyb20gJ3ZpdGUtcGx1Z2luLWFwaS1yb3V0ZXMnXHJcbmltcG9ydCBmbG93Yml0ZVJlYWN0IGZyb20gXCJmbG93Yml0ZS1yZWFjdC9wbHVnaW4vdml0ZVwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbnNlcnZlcjoge1xyXG4gIHBvcnQ6IDMwMDAsXHJcbiAgY29yczogdHJ1ZSxcclxuICBwcm94eToge1xyXG4gICAgJy9hcGkvcnNzaHViJzoge1xyXG4gICAgICB0YXJnZXQ6ICdodHRwczovL3Jzc2h1Yi5hcHAnLFxyXG4gICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGlcXC9yc3NodWIvLCAnJyksXHJcbiAgICB9LFxyXG4gIH1cclxufSxcclxucGx1Z2luczogW1xyXG4gIHJlYWN0KCksXHJcbiAgQXBpUm91dGVzKHtcclxuICAgIHJvdXRlQmFzZTogXCIuL3NyYy9hcGlcIlxyXG4gIH0pLFxyXG4gIHRhaWx3aW5kY3NzKCksXHJcbiAgZmxvd2JpdGVSZWFjdCgpXSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUCxPQUFPLGlCQUFpQjtBQUM1USxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFFbEIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sbUJBQW1CO0FBRzFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzVCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxrQkFBa0IsRUFBRTtBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNSLFdBQVc7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxJQUNaLGNBQWM7QUFBQSxFQUFDO0FBQ2pCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
