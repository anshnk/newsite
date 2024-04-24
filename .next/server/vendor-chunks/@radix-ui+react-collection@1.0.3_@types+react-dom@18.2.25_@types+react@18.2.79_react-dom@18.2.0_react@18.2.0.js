"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-collection/dist/index.mjs":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-collection/dist/index.mjs ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCollection: () => (/* binding */ $e02a7d9cb1dc128c$export$c74125a8e3af6bb2)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-context */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-slot */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.79_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs\");\n\n\n\n\n\n\n\n\n\n// We have resorted to returning slots directly rather than exposing primitives that can then\n// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.\n// This is because we encountered issues with generic types that cannot be statically analysed\n// due to creating them dynamically via createCollection.\nfunction $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {\n    /* -----------------------------------------------------------------------------------------------\n   * CollectionProvider\n   * ---------------------------------------------------------------------------------------------*/ const PROVIDER_NAME = name + 'CollectionProvider';\n    const [createCollectionContext, createCollectionScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.createContextScope)(PROVIDER_NAME);\n    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {\n        collectionRef: {\n            current: null\n        },\n        itemMap: new Map()\n    });\n    const CollectionProvider = (props)=>{\n        const { scope: scope , children: children  } = props;\n        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n        const itemMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map()).current;\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollectionProviderImpl, {\n            scope: scope,\n            itemMap: itemMap,\n            collectionRef: ref\n        }, children);\n    };\n    /*#__PURE__*/ Object.assign(CollectionProvider, {\n        displayName: PROVIDER_NAME\n    });\n    /* -----------------------------------------------------------------------------------------------\n   * CollectionSlot\n   * ---------------------------------------------------------------------------------------------*/ const COLLECTION_SLOT_NAME = name + 'CollectionSlot';\n    const CollectionSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n        const { scope: scope , children: children  } = props;\n        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);\n        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(forwardedRef, context.collectionRef);\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot, {\n            ref: composedRefs\n        }, children);\n    });\n    /*#__PURE__*/ Object.assign(CollectionSlot, {\n        displayName: COLLECTION_SLOT_NAME\n    });\n    /* -----------------------------------------------------------------------------------------------\n   * CollectionItem\n   * ---------------------------------------------------------------------------------------------*/ const ITEM_SLOT_NAME = name + 'CollectionItemSlot';\n    const ITEM_DATA_ATTR = 'data-radix-collection-item';\n    const CollectionItemSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n        const { scope: scope , children: children , ...itemData } = props;\n        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(forwardedRef, ref);\n        const context = useCollectionContext(ITEM_SLOT_NAME, scope);\n        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n            context.itemMap.set(ref, {\n                ref: ref,\n                ...itemData\n            });\n            return ()=>void context.itemMap.delete(ref)\n            ;\n        });\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot, {\n            [ITEM_DATA_ATTR]: '',\n            ref: composedRefs\n        }, children);\n    });\n    /*#__PURE__*/ Object.assign(CollectionItemSlot, {\n        displayName: ITEM_SLOT_NAME\n    });\n    /* -----------------------------------------------------------------------------------------------\n   * useCollection\n   * ---------------------------------------------------------------------------------------------*/ function useCollection(scope) {\n        const context = useCollectionContext(name + 'CollectionConsumer', scope);\n        const getItems = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{\n            const collectionNode = context.collectionRef.current;\n            if (!collectionNode) return [];\n            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));\n            const items = Array.from(context.itemMap.values());\n            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)\n            );\n            return orderedItems;\n        }, [\n            context.collectionRef,\n            context.itemMap\n        ]);\n        return getItems;\n    }\n    return [\n        {\n            Provider: CollectionProvider,\n            Slot: CollectionSlot,\n            ItemSlot: CollectionItemSlot\n        },\n        useCollection,\n        createCollectionScope\n    ];\n}\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbGxlY3Rpb25AMS4wLjNfQHR5cGVzK3JlYWN0LWRvbUAxOC4yLjI1X0B0eXBlcytyZWFjdEAxOC4yLjc5X3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29sbGVjdGlvbi9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUN1RDtBQUNEO0FBQzlCOzs7Ozs7QUFNekQ7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsMkVBQXlCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLGdCQUFnQixxQ0FBcUM7QUFDckQsb0JBQW9CLHlDQUFtQjtBQUN2Qyx3QkFBd0IseUNBQW1CO0FBQzNDLDZCQUE2QixnREFBMEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNkNBQXVCO0FBQ2hFLGdCQUFnQixxQ0FBcUM7QUFDckQ7QUFDQSw2QkFBNkIsNkVBQXNCO0FBQ25ELDZCQUE2QixnREFBMEIsQ0FBQyxzREFBVztBQUNuRTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2Q0FBdUI7QUFDcEUsZ0JBQWdCLGtEQUFrRDtBQUNsRSxvQkFBb0IseUNBQW1CO0FBQ3ZDLDZCQUE2Qiw2RUFBc0I7QUFDbkQ7QUFDQSxRQUFRLDRDQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVCw2QkFBNkIsZ0RBQTBCLENBQUMsc0RBQVc7QUFDbkU7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBd0I7QUFDakQ7QUFDQTtBQUNBLGdGQUFnRixlQUFlO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUt1RTtBQUN2RSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsaXp6eS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1jb2xsZWN0aW9uQDEuMC4zX0B0eXBlcytyZWFjdC1kb21AMTguMi4yNV9AdHlwZXMrcmVhY3RAMTguMi43OV9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbGxlY3Rpb24vZGlzdC9pbmRleC5tanM/ZGY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJDZ2WWhVJHJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVDb250ZXh0U2NvcGUgYXMgJDZ2WWhVJGNyZWF0ZUNvbnRleHRTY29wZX0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1jb250ZXh0XCI7XG5pbXBvcnQge3VzZUNvbXBvc2VkUmVmcyBhcyAkNnZZaFUkdXNlQ29tcG9zZWRSZWZzfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmc1wiO1xuaW1wb3J0IHtTbG90IGFzICQ2dlloVSRTbG90fSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjtcblxuXG5cblxuXG4vLyBXZSBoYXZlIHJlc29ydGVkIHRvIHJldHVybmluZyBzbG90cyBkaXJlY3RseSByYXRoZXIgdGhhbiBleHBvc2luZyBwcmltaXRpdmVzIHRoYXQgY2FuIHRoZW5cbi8vIGJlIHNsb3R0ZWQgbGlrZSBgPENvbGxlY3Rpb25JdGVtIGFzPXtTbG90fT7igKY8L0NvbGxlY3Rpb25JdGVtPmAuXG4vLyBUaGlzIGlzIGJlY2F1c2Ugd2UgZW5jb3VudGVyZWQgaXNzdWVzIHdpdGggZ2VuZXJpYyB0eXBlcyB0aGF0IGNhbm5vdCBiZSBzdGF0aWNhbGx5IGFuYWx5c2VkXG4vLyBkdWUgdG8gY3JlYXRpbmcgdGhlbSBkeW5hbWljYWxseSB2aWEgY3JlYXRlQ29sbGVjdGlvbi5cbmZ1bmN0aW9uICRlMDJhN2Q5Y2IxZGMxMjhjJGV4cG9ydCRjNzQxMjVhOGUzYWY2YmIyKG5hbWUpIHtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb2xsZWN0aW9uUHJvdmlkZXJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gY29uc3QgUFJPVklERVJfTkFNRSA9IG5hbWUgKyAnQ29sbGVjdGlvblByb3ZpZGVyJztcbiAgICBjb25zdCBbY3JlYXRlQ29sbGVjdGlvbkNvbnRleHQsIGNyZWF0ZUNvbGxlY3Rpb25TY29wZV0gPSAkNnZZaFUkY3JlYXRlQ29udGV4dFNjb3BlKFBST1ZJREVSX05BTUUpO1xuICAgIGNvbnN0IFtDb2xsZWN0aW9uUHJvdmlkZXJJbXBsLCB1c2VDb2xsZWN0aW9uQ29udGV4dF0gPSBjcmVhdGVDb2xsZWN0aW9uQ29udGV4dChQUk9WSURFUl9OQU1FLCB7XG4gICAgICAgIGNvbGxlY3Rpb25SZWY6IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbU1hcDogbmV3IE1hcCgpXG4gICAgfSk7XG4gICAgY29uc3QgQ29sbGVjdGlvblByb3ZpZGVyID0gKHByb3BzKT0+e1xuICAgICAgICBjb25zdCB7IHNjb3BlOiBzY29wZSAsIGNoaWxkcmVuOiBjaGlsZHJlbiAgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCByZWYgPSAkNnZZaFUkcmVhY3QudXNlUmVmKG51bGwpO1xuICAgICAgICBjb25zdCBpdGVtTWFwID0gJDZ2WWhVJHJlYWN0LnVzZVJlZihuZXcgTWFwKCkpLmN1cnJlbnQ7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovICQ2dlloVSRyZWFjdC5jcmVhdGVFbGVtZW50KENvbGxlY3Rpb25Qcm92aWRlckltcGwsIHtcbiAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgIGl0ZW1NYXA6IGl0ZW1NYXAsXG4gICAgICAgICAgICBjb2xsZWN0aW9uUmVmOiByZWZcbiAgICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH07XG4gICAgLyojX19QVVJFX18qLyBPYmplY3QuYXNzaWduKENvbGxlY3Rpb25Qcm92aWRlciwge1xuICAgICAgICBkaXNwbGF5TmFtZTogUFJPVklERVJfTkFNRVxuICAgIH0pO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbGxlY3Rpb25TbG90XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGNvbnN0IENPTExFQ1RJT05fU0xPVF9OQU1FID0gbmFtZSArICdDb2xsZWN0aW9uU2xvdCc7XG4gICAgY29uc3QgQ29sbGVjdGlvblNsb3QgPSAvKiNfX1BVUkVfXyovICQ2dlloVSRyZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgZm9yd2FyZGVkUmVmKT0+e1xuICAgICAgICBjb25zdCB7IHNjb3BlOiBzY29wZSAsIGNoaWxkcmVuOiBjaGlsZHJlbiAgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29sbGVjdGlvbkNvbnRleHQoQ09MTEVDVElPTl9TTE9UX05BTUUsIHNjb3BlKTtcbiAgICAgICAgY29uc3QgY29tcG9zZWRSZWZzID0gJDZ2WWhVJHVzZUNvbXBvc2VkUmVmcyhmb3J3YXJkZWRSZWYsIGNvbnRleHQuY29sbGVjdGlvblJlZik7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovICQ2dlloVSRyZWFjdC5jcmVhdGVFbGVtZW50KCQ2dlloVSRTbG90LCB7XG4gICAgICAgICAgICByZWY6IGNvbXBvc2VkUmVmc1xuICAgICAgICB9LCBjaGlsZHJlbik7XG4gICAgfSk7XG4gICAgLyojX19QVVJFX18qLyBPYmplY3QuYXNzaWduKENvbGxlY3Rpb25TbG90LCB7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBDT0xMRUNUSU9OX1NMT1RfTkFNRVxuICAgIH0pO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbGxlY3Rpb25JdGVtXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGNvbnN0IElURU1fU0xPVF9OQU1FID0gbmFtZSArICdDb2xsZWN0aW9uSXRlbVNsb3QnO1xuICAgIGNvbnN0IElURU1fREFUQV9BVFRSID0gJ2RhdGEtcmFkaXgtY29sbGVjdGlvbi1pdGVtJztcbiAgICBjb25zdCBDb2xsZWN0aW9uSXRlbVNsb3QgPSAvKiNfX1BVUkVfXyovICQ2dlloVSRyZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgZm9yd2FyZGVkUmVmKT0+e1xuICAgICAgICBjb25zdCB7IHNjb3BlOiBzY29wZSAsIGNoaWxkcmVuOiBjaGlsZHJlbiAsIC4uLml0ZW1EYXRhIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgcmVmID0gJDZ2WWhVJHJlYWN0LnVzZVJlZihudWxsKTtcbiAgICAgICAgY29uc3QgY29tcG9zZWRSZWZzID0gJDZ2WWhVJHVzZUNvbXBvc2VkUmVmcyhmb3J3YXJkZWRSZWYsIHJlZik7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb2xsZWN0aW9uQ29udGV4dChJVEVNX1NMT1RfTkFNRSwgc2NvcGUpO1xuICAgICAgICAkNnZZaFUkcmVhY3QudXNlRWZmZWN0KCgpPT57XG4gICAgICAgICAgICBjb250ZXh0Lml0ZW1NYXAuc2V0KHJlZiwge1xuICAgICAgICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgICAgICAgIC4uLml0ZW1EYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKT0+dm9pZCBjb250ZXh0Lml0ZW1NYXAuZGVsZXRlKHJlZilcbiAgICAgICAgICAgIDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovICQ2dlloVSRyZWFjdC5jcmVhdGVFbGVtZW50KCQ2dlloVSRTbG90LCB7XG4gICAgICAgICAgICBbSVRFTV9EQVRBX0FUVFJdOiAnJyxcbiAgICAgICAgICAgIHJlZjogY29tcG9zZWRSZWZzXG4gICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9KTtcbiAgICAvKiNfX1BVUkVfXyovIE9iamVjdC5hc3NpZ24oQ29sbGVjdGlvbkl0ZW1TbG90LCB7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBJVEVNX1NMT1RfTkFNRVxuICAgIH0pO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIHVzZUNvbGxlY3Rpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gZnVuY3Rpb24gdXNlQ29sbGVjdGlvbihzY29wZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29sbGVjdGlvbkNvbnRleHQobmFtZSArICdDb2xsZWN0aW9uQ29uc3VtZXInLCBzY29wZSk7XG4gICAgICAgIGNvbnN0IGdldEl0ZW1zID0gJDZ2WWhVJHJlYWN0LnVzZUNhbGxiYWNrKCgpPT57XG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uTm9kZSA9IGNvbnRleHQuY29sbGVjdGlvblJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCFjb2xsZWN0aW9uTm9kZSkgcmV0dXJuIFtdO1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJlZE5vZGVzID0gQXJyYXkuZnJvbShjb2xsZWN0aW9uTm9kZS5xdWVyeVNlbGVjdG9yQWxsKGBbJHtJVEVNX0RBVEFfQVRUUn1dYCkpO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGNvbnRleHQuaXRlbU1hcC52YWx1ZXMoKSk7XG4gICAgICAgICAgICBjb25zdCBvcmRlcmVkSXRlbXMgPSBpdGVtcy5zb3J0KChhLCBiKT0+b3JkZXJlZE5vZGVzLmluZGV4T2YoYS5yZWYuY3VycmVudCkgLSBvcmRlcmVkTm9kZXMuaW5kZXhPZihiLnJlZi5jdXJyZW50KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBvcmRlcmVkSXRlbXM7XG4gICAgICAgIH0sIFtcbiAgICAgICAgICAgIGNvbnRleHQuY29sbGVjdGlvblJlZixcbiAgICAgICAgICAgIGNvbnRleHQuaXRlbU1hcFxuICAgICAgICBdKTtcbiAgICAgICAgcmV0dXJuIGdldEl0ZW1zO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgICBQcm92aWRlcjogQ29sbGVjdGlvblByb3ZpZGVyLFxuICAgICAgICAgICAgU2xvdDogQ29sbGVjdGlvblNsb3QsXG4gICAgICAgICAgICBJdGVtU2xvdDogQ29sbGVjdGlvbkl0ZW1TbG90XG4gICAgICAgIH0sXG4gICAgICAgIHVzZUNvbGxlY3Rpb24sXG4gICAgICAgIGNyZWF0ZUNvbGxlY3Rpb25TY29wZVxuICAgIF07XG59XG5cblxuXG5cbmV4cG9ydCB7JGUwMmE3ZDljYjFkYzEyOGMkZXhwb3J0JGM3NDEyNWE4ZTNhZjZiYjIgYXMgY3JlYXRlQ29sbGVjdGlvbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-collection/dist/index.mjs\n");

/***/ })

};
;