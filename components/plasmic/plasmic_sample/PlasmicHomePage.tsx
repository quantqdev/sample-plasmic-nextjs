// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ebHHF3yM7B6GSg8q7r2FBw
// Component: OxqiDv9U5lEu

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import PageLayout from "../../PageLayout"; // plasmic-import: cPfYxPfKbAAF/component
import { RichTable } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponent
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponentHelper
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponent
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponentHelper
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: 2aDuB9WVQvRt/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_plasmic_sample.module.css"; // plasmic-import: ebHHF3yM7B6GSg8q7r2FBw/projectcss
import sty from "./PlasmicHomePage.module.css"; // plasmic-import: OxqiDv9U5lEu/css

createPlasmicElementProxy;

export type PlasmicHomePage__VariantMembers = {};
export type PlasmicHomePage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomePage__VariantsArgs;
export const PlasmicHomePage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomePage__ArgsType = {};
type ArgPropType = keyof PlasmicHomePage__ArgsType;
export const PlasmicHomePage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomePage__OverridesType = {
  root?: p.Flex<"div">;
  pageLayout?: p.Flex<typeof PageLayout>;
  table?: p.Flex<typeof RichTable>;
  form?: p.Flex<typeof FormWrapper>;
  button?: p.Flex<typeof AntdButton>;
  text?: p.Flex<"div">;
};

export interface DefaultHomePageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomePage__RenderFunc(props: {
  variants: PlasmicHomePage__VariantsArgs;
  args: PlasmicHomePage__ArgsType;
  overrides: PlasmicHomePage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec(
          "selectedRowKeys",
          RichTable_Helpers
        )
      },
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: p.generateOnMutateForSpec("value", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const { cache, mutate: swrMutate } = usePlasmicDataConfig();
  const mutate = swrMutate;

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    customers: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "w7U1WQtYAACHYZw3VQLp7u",
            opId: "2bc6f94c-4e81-4048-af00-91718de0f42c",
            userArgs: {},
            cacheKey: "plasmic.$.n5_2jNKTlTTE.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <React.Fragment>
                  {(() => {
                    const child$Props = {
                      canSelectRows: "click" as const,
                      className: classNames("__wab_instance", sty.table),
                      data: (() => {
                        try {
                          return $queries.customers;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })(),
                      onRowSelectionChanged: async (...eventArgs: any) => {
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRowKey",
                          ["table", "selectedRowKey"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRow",
                          ["table", "selectedRow"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRows",
                          ["table", "selectedRows"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRowKeys",
                          ["table", "selectedRowKeys"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                      },
                      scopeClassName: sty["table__instance"],
                      selectedRowKey: p.generateStateValueProp($state, [
                        "table",
                        "selectedRowKey"
                      ]),
                      selectedRowKeys: p.generateStateValueProp($state, [
                        "table",
                        "selectedRowKeys"
                      ]),
                      themeResetClassName: classNames(
                        projectcss.root_reset,
                        projectcss.root_reset_tags,
                        projectcss.plasmic_default_styles,
                        projectcss.plasmic_mixins,
                        projectcss.plasmic_tokens,
                        plasmic_antd_5_hostless_css.plasmic_tokens
                      )
                    };
                    p.initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "selectedRowKey",
                          plasmicStateName: "table.selectedRowKey"
                        },
                        {
                          name: "selectedRow",
                          plasmicStateName: "table.selectedRow"
                        },
                        {
                          name: "selectedRows",
                          plasmicStateName: "table.selectedRows"
                        },
                        {
                          name: "selectedRowKeys",
                          plasmicStateName: "table.selectedRowKeys"
                        }
                      ],
                      [],
                      RichTable_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <RichTable
                        data-plasmic-name={"table"}
                        data-plasmic-override={overrides.table}
                        {...child$Props}
                      />
                    );
                  })()}
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.form),
                      extendedOnValuesChange:
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["form", "value"],
                          FormWrapper_Helpers
                        ),
                      formItems: [
                        {
                          label: "Contact name",
                          inputType: "Text",
                          name: "contact_name"
                        },
                        {
                          label: "Contact title",
                          inputType: "Text",
                          name: "contact_title"
                        },
                        {
                          label: "Company name",
                          inputType: "Text",
                          name: "company_name"
                        }
                      ],
                      initialValues: (() => {
                        try {
                          return $state.table.selectedRow;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })(),
                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "vertical" as const,
                      mode: "simplified" as const,
                      onFinish: async values => {
                        const $steps = {};
                        $steps["updateMany"] = true
                          ? (() => {
                              const actionArgs = {
                                dataOp: __wrapUserFunction(
                                  {
                                    type: "InteractionArgLoc",
                                    actionName: "dataSourceOp",
                                    interactionUuid: "rkcYNLpCh60D",
                                    componentUuid: "OxqiDv9U5lEu",
                                    argName: "dataOp"
                                  },
                                  () => ({
                                    sourceId: "w7U1WQtYAACHYZw3VQLp7u",
                                    opId: "c1fdfa38-20ad-49d2-81bc-a6750e566fdf",
                                    userArgs: {
                                      variables: [$state.form.value],
                                      conditions: [
                                        $state.table.selectedRow.customer_id
                                      ]
                                    },
                                    cacheKey: null,
                                    invalidatedKeys: ["plasmic_refresh_all"],
                                    roleId: null
                                  })
                                )
                              };
                              return __wrapUserFunction(
                                {
                                  type: "InteractionLoc",
                                  actionName: "dataSourceOp",
                                  interactionUuid: "rkcYNLpCh60D",
                                  componentUuid: "OxqiDv9U5lEu"
                                },
                                () =>
                                  (async ({ dataOp, continueOnError }) => {
                                    try {
                                      const response =
                                        await executePlasmicDataOp(dataOp, {
                                          userAuthToken:
                                            dataSourcesCtx?.userAuthToken,
                                          user: dataSourcesCtx?.user
                                        });
                                      if (
                                        dataOp.invalidatedKeys &&
                                        dataOp.invalidatedKeys.find(
                                          key => key === "plasmic_refresh_all"
                                        )
                                      ) {
                                        await Promise.all(
                                          Array.from(cache.keys()).map(
                                            async key => mutate(key)
                                          )
                                        );

                                        return response;
                                      }
                                      if (dataOp.invalidatedKeys) {
                                        await Promise.all(
                                          dataOp.invalidatedKeys.map(
                                            async invalidateKey =>
                                              Promise.all(
                                                Array.from(cache.keys()).map(
                                                  async key => {
                                                    if (
                                                      typeof key === "string" &&
                                                      key.includes(
                                                        `.$.${invalidateKey}.$.`
                                                      )
                                                    ) {
                                                      return mutate(key);
                                                    }
                                                    return Promise.resolve();
                                                  }
                                                )
                                              )
                                          )
                                        );
                                      }
                                      return response;
                                    } catch (e) {
                                      if (!continueOnError) {
                                        throw e;
                                      }
                                      return e;
                                    }
                                  })?.apply(null, [actionArgs]),
                                actionArgs
                              );
                            })()
                          : undefined;
                        if (
                          typeof $steps["updateMany"] === "object" &&
                          typeof $steps["updateMany"].then === "function"
                        ) {
                          $steps["updateMany"] = await __wrapUserPromise(
                            {
                              type: "InteractionLoc",
                              actionName: "dataSourceOp",
                              interactionUuid: "rkcYNLpCh60D",
                              componentUuid: "OxqiDv9U5lEu"
                            },
                            $steps["updateMany"]
                          );
                        }
                      },
                      ref: ref => {
                        $refs["form"] = ref;
                      },
                      submitSlot: (
                        <AntdButton
                          data-plasmic-name={"button"}
                          data-plasmic-override={overrides.button}
                          className={classNames("__wab_instance", sty.button)}
                          submitsForm={true}
                          type={"primary" as const}
                        >
                          <div
                            data-plasmic-name={"text"}
                            data-plasmic-override={overrides.text}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text
                            )}
                          >
                            {"Submit"}
                          </div>
                        </AntdButton>
                      ),
                      wrapperCol: { span: 16, horizontalOnly: true }
                    };
                    p.initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "form.value"
                        }
                      ],
                      [],
                      FormWrapper_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <FormWrapper
                        data-plasmic-name={"form"}
                        data-plasmic-override={overrides.form}
                        {...child$Props}
                      />
                    );
                  })()}
                </React.Fragment>
              )}
            </ph.DataCtxReader>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "table", "form", "button", "text"],
  pageLayout: ["pageLayout", "table", "form", "button", "text"],
  table: ["table"],
  form: ["form", "button", "text"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  table: typeof RichTable;
  form: typeof FormWrapper;
  button: typeof AntdButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomePage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomePage__VariantsArgs;
    args?: PlasmicHomePage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomePage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomePage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomePage__ArgProps,
          internalVariantPropNames: PlasmicHomePage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomePage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomePage";
  } else {
    func.displayName = `PlasmicHomePage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomePage = Object.assign(
  // Top-level PlasmicHomePage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    table: makeNodeComponent("table"),
    form: makeNodeComponent("form"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicHomePage
    internalVariantProps: PlasmicHomePage__VariantProps,
    internalArgProps: PlasmicHomePage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomePage;
/* prettier-ignore-end */
