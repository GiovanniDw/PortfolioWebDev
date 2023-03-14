import { _ as _export_sfc, f as useUserStore, s as storeToRefs, g as computed, o as openBlock, c as createElementBlock, h as createVNode, b as unref, B as BaseHero, a as createBaseVNode, d as createCommentVNode } from "./index-c972175d.js";
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
//# sourceMappingURL=AboutView-1a00b90f.js.map
