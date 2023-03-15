import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, d as defineStore, r as ref, u as useFetch, s as storeToRefs, b as computed, w as withDirectives, v as vModelText, e as unref, f as createVNode, g as withCtx, T as TransitionGroup, h as createCommentVNode, F as Fragment, i as renderList, j as createBlock } from "./index-87122033.js";
const _hoisted_1$1 = ["href"];
const _sfc_main$1 = {
  __name: "RepoItem",
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", null, [
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
const useReposStore = defineStore("repos", () => {
  const username = ref("GiovanniDw");
  const name = ref("Giovanni");
  const url = ref(`https://api.github.com/users/${username.value}/repos`);
  const { isFetching, error, data } = useFetch(url.value).get().json();
  console.log(data);
  return { username, name, url, data };
});
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
  name: "list",
  class: "grid"
};
const _sfc_main = {
  __name: "ProjectsView",
  setup(__props) {
    const store = useReposStore();
    const { data } = storeToRefs(store);
    const list = ref([]);
    const q = ref("");
    if (data.value) {
      list.value = data.value;
    }
    console.log(list);
    const computedList = computed(() => {
      console.log(data.value);
      return data.value.filter((item) => item.name.toLowerCase().includes(q.value));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createBaseVNode("section", null, [
          _hoisted_2,
          withDirectives(createBaseVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => q.value = $event)
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vModelText, q.value]
          ]),
          unref(computedList) ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(TransitionGroup, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(unref(computedList), (repo, index) => {
                    return openBlock(), createBlock(RepoItem, {
                      tag: "div",
                      css: false,
                      data: repo,
                      key: repo.name,
                      "data-index": index
                    }, null, 8, ["data", "data-index"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ])) : createCommentVNode("v-if", true)
        ])
      ]);
    };
  }
};
const ProjectsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/Giovanni/Developer/PortfolioWebDev/src/views/ProjectsView.vue"]]);
export {
  ProjectsView as default
};
//# sourceMappingURL=ProjectsView-880fb267.js.map
