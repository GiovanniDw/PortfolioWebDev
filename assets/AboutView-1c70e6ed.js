import { _ as _export_sfc, u as useUserStore, s as storeToRefs, b as computed, o as openBlock, c as createElementBlock, d as createVNode, e as unref, B as BaseHero, t as toDisplayString, f as createCommentVNode, a as createBaseVNode } from "./index-e32c646a.js";
const AboutView_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "about" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = ["src"];
const _sfc_main = {
  __name: "AboutView",
  setup(__props) {
    const store = useUserStore();
    const { data, username } = storeToRefs(store);
    const getImageUrl = computed(() => {
      return data.avatar_url;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createVNode(BaseHero, {
          data: unref(data),
          title: "About"
        }, null, 8, ["data"]),
        unref(store) ? (openBlock(), createElementBlock(
          "div",
          _hoisted_2,
          toDisplayString(unref(data)),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true),
        unref(data) ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("img", {
            src: unref(getImageUrl),
            alt: ""
          }, null, 8, _hoisted_4)
        ])) : createCommentVNode("v-if", true)
      ]);
    };
  }
};
const AboutView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/Giovanni/Developer/PortfolioWebDev/src/views/AboutView.vue"]]);
export {
  AboutView as default
};
//# sourceMappingURL=AboutView-1c70e6ed.js.map
