import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as useReposStore, s as storeToRefs, b as unref, F as Fragment, r as renderList, d as createCommentVNode, e as createBlock } from "./index-65d60d48.js";
const _hoisted_1$1 = ["href"];
const _sfc_main$1 = {
  __name: "RepoItem",
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode(
          "h3",
          null,
          "Name:" + toDisplayString(__props.data.name),
          1
          /* TEXT */
        ),
        createBaseVNode(
          "p",
          null,
          "Size " + toDisplayString(__props.data.size),
          1
          /* TEXT */
        ),
        createBaseVNode("a", {
          href: __props.data.url
        }, toDisplayString(__props.data.url), 9, _hoisted_1$1)
      ]);
    };
  }
};
const RepoItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/Users/Giovanni/Developer/PortfolioWebDev/src/components/RepoItem.vue"]]);
const ProjectsView_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "project" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h1",
  null,
  "Projects",
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  key: 0,
  class: "grid"
};
const _sfc_main = {
  __name: "ProjectsView",
  setup(__props) {
    const store = useReposStore();
    const { data } = storeToRefs(store);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        _hoisted_2,
        unref(data) ? (openBlock(), createElementBlock("div", _hoisted_3, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(data), (repo) => {
              return openBlock(), createBlock(RepoItem, {
                data: repo,
                key: repo.id
              }, null, 8, ["data"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : createCommentVNode("v-if", true)
      ]);
    };
  }
};
const ProjectsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/Giovanni/Developer/PortfolioWebDev/src/views/ProjectsView.vue"]]);
export {
  ProjectsView as default
};
//# sourceMappingURL=ProjectsView-e3ec371e.js.map
