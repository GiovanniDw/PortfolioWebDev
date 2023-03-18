import { _ as _export_sfc, u as useRoute, a as useReposStore, r as ref, s as storeToRefs, b as resolveDirective, o as openBlock, c as createElementBlock, d as unref, w as withDirectives, g as createBaseVNode, t as toDisplayString, f as createCommentVNode, p as pushScopeId, j as popScopeId } from "./index-7f3687a8.js";
const _withScopeId = (n) => (pushScopeId("data-v-b6db6e6b"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "project"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = { name: "content" };
const _hoisted_4 = ["href"];
const _hoisted_5 = { key: 1 };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "h3",
  null,
  "Loading",
  -1
  /* HOISTED */
));
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { key: 2 };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "h3",
  null,
  "Error",
  -1
  /* HOISTED */
));
const _hoisted_10 = [
  _hoisted_9
];
const _sfc_main = {
  __name: "ProjectDetail",
  props: {
    project: Object
  },
  setup(__props) {
    const route = useRoute();
    const repos = useReposStore();
    ref("");
    const { project, loading, error, id } = storeToRefs(repos);
    console.log(route.params.id);
    repos.fetchProject(route.params.id);
    return (_ctx, _cache) => {
      const _directive_shared_element = resolveDirective("shared-element");
      return openBlock(), createElementBlock("section", null, [
        unref(project) ? withDirectives((openBlock(), createElementBlock("article", _hoisted_1, [
          createBaseVNode("img", {
            src: `https://opengraph.githubassets.com/187af8fe4f0c5fdf671f74087c5ff1174cc59dff718dd0fbb10bd3c6af271c18/GiovanniDw/${unref(project).name}`
          }, null, 8, _hoisted_2),
          createBaseVNode(
            "h3",
            null,
            toDisplayString(unref(project).name),
            1
            /* TEXT */
          ),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode(
              "p",
              null,
              "Size " + toDisplayString(unref(project).size),
              1
              /* TEXT */
            ),
            createBaseVNode(
              "p",
              null,
              toDisplayString(unref(project).language),
              1
              /* TEXT */
            ),
            createBaseVNode("a", {
              href: unref(project).html_url
            }, toDisplayString(unref(project).html_url), 9, _hoisted_4)
          ])
        ])), [
          [_directive_shared_element, void 0, unref(route).params.id]
        ]) : createCommentVNode("v-if", true),
        unref(loading) ? (openBlock(), createElementBlock("article", _hoisted_5, _hoisted_7)) : createCommentVNode("v-if", true),
        unref(error) ? (openBlock(), createElementBlock("article", _hoisted_8, _hoisted_10)) : createCommentVNode("v-if", true)
      ]);
    };
  }
};
const ProjectDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6db6e6b"], ["__file", "/Users/Giovanni/Developer/PortfolioWebDev/src/views/ProjectDetail.vue"]]);
export {
  ProjectDetail as default
};
//# sourceMappingURL=ProjectDetail-21f97566.js.map
