import { _ as _export_sfc, h as useUserStore, s as storeToRefs, i as computed, o as openBlock, c as createElementBlock, j as createVNode, b as unref, B as BaseHero, a as createBaseVNode, f as createCommentVNode } from "./index-6ec928d0.js";
const AboutView_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "about" };
const _hoisted_2 = {
  key: 0,
  class: "content"
};
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "div",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "info")
  ],
  -1
  /* HOISTED */
);
const _sfc_main = {
  __name: "AboutView",
  setup(__props) {
    const store = useUserStore();
    const { data, username } = storeToRefs(store);
    computed(() => {
      return data.avatar_url;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createVNode(BaseHero, {
          data: unref(data),
          title: "About"
        }, null, 8, ["data"]),
        unref(data) ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("div", null, [
            createBaseVNode("img", {
              src: unref(data).avatar_url,
              alt: ""
            }, null, 8, _hoisted_3)
          ]),
          _hoisted_4
        ])) : createCommentVNode("v-if", true)
      ]);
    };
  }
};
const AboutView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/Giovanni/Developer/PortfolioWebDev/src/views/AboutView.vue"]]);
export {
  AboutView as default
};
//# sourceMappingURL=AboutView-d0d3aee1.js.map
