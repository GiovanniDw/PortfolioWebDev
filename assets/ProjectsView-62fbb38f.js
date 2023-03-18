import { _ as _export_sfc, u as useRoute, r as ref, a as useReposStore, s as storeToRefs, b as resolveDirective, o as openBlock, c as createElementBlock, d as unref, F as Fragment, e as renderList, f as createCommentVNode, g as createBaseVNode, t as toDisplayString, w as withDirectives, h as createVNode, i as withCtx, R as RouterLink } from "./index-ada761b1.js";
const _hoisted_1 = {
  key: 0,
  name: "projects"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = { name: "content" };
const _hoisted_4 = ["href"];
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { key: 2 };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "h3",
  null,
  "Loading",
  -1
  /* HOISTED */
);
const _hoisted_8 = [
  _hoisted_7
];
const _sfc_main = {
  __name: "ProjectsView",
  setup(__props) {
    const route = useRoute();
    const routeParams = route.params.id;
    ref("");
    const repos = useReposStore();
    const { id, projectsList, projects, loading, error } = storeToRefs(repos);
    console.log(repos.projects.value);
    repos.setId(routeParams);
    return (_ctx, _cache) => {
      const _directive_shared_element = resolveDirective("shared-element");
      return openBlock(), createElementBlock("section", null, [
        unref(projects) ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(projects), (project) => {
              return withDirectives((openBlock(), createElementBlock("article", {
                key: project.name
              }, [
                createVNode(unref(RouterLink), {
                  class: "project",
                  to: {
                    name: "project",
                    params: { id: project.name },
                    props: { project }
                  }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("img", {
                      src: `https://opengraph.githubassets.com/187af8fe4f0c5fdf671f74087c5ff1174cc59dff718dd0fbb10bd3c6af271c18/GiovanniDw/${project.name.toString()}`
                    }, null, 8, _hoisted_2),
                    createBaseVNode(
                      "h3",
                      null,
                      toDisplayString(project.name),
                      1
                      /* TEXT */
                    ),
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode(
                        "p",
                        null,
                        "Size " + toDisplayString(project.size),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "p",
                        null,
                        toDisplayString(project.language),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode("a", {
                        href: project.html_url
                      }, "Open " + toDisplayString(project.name) + "}", 9, _hoisted_4)
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["to"])
              ])), [
                [_directive_shared_element, void 0, project.name]
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : createCommentVNode("v-if", true),
        unref(error) ? (openBlock(), createElementBlock("article", _hoisted_5, [
          createBaseVNode(
            "h3",
            null,
            toDisplayString(unref(error)),
            1
            /* TEXT */
          )
        ])) : createCommentVNode("v-if", true),
        unref(loading) ? (openBlock(), createElementBlock("article", _hoisted_6, _hoisted_8)) : createCommentVNode("v-if", true)
      ]);
    };
  }
};
const ProjectsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/Giovanni/Developer/PortfolioWebDev/src/views/ProjectsView.vue"]]);
export {
  ProjectsView as default
};
//# sourceMappingURL=ProjectsView-62fbb38f.js.map
