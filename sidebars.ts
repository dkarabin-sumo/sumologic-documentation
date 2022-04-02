/**
 Sumo Architecture List
 Add content to the following sections in this sidebar Navigation file:

  Manage: Admin level options, collection, connections, etc
  Alerts: Alerts, Monitors, SLOs, Health Events, Connections 
  Dashboards: Create Dash, Library of Dashboards
  Logs: Log Search, All Log Searches, Livetail, Lookup, Log Config
  Metrics: Metrics Search, All Metrics Searches, Config
  Infrastructure Monitoring: Kubernetes, AWS Observability, Root Cause Explorer,
  APM: Application Monitoring (Applications, Services, Service Map, Transaction traces, Span analytics, Root Cause Explorer), RUM
  Incidents Management: Incidents, Triage, Entities, Playbooks
  Security Events: Security Evenets, Insights, Signals, Entities, Records
  Security Detection: Rules, Rules Tuning, Threat Intelligence, Match List, File Analysis, Custom Insights, Network Blocks, Suppressed Entites, Suppressed Lists
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'get-started/index'},
      items: [
        'get-started/sign-up',
        'get-started/system-requirements',
        'get-started/manage-account',
        {
          type: 'category',
          label: 'Checklists',
          collapsible: true,
          collapsed: true,
          items: [
            'get-started/checklist',
            'get-started/checklist-analyst',
            'get-started/checklist-admins',
          ]
        },
        'get-started/get-help',
        'get-started/keyboard-shortcuts',
        {
          type: 'category',
          label: 'FAQs',
          collapsible: true,
          collapsed: true,
          items: [
            'get-started/sumo-faqs',
            'get-started/certification-faqs',
          ]
        },
        'get-started/sumo-logic-components',
        'get-started/sumo-logic-ui',
        {
          type: 'category',
          label: 'Library',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'get-started/library/index'},
          items: [
            'get-started/library/manage-library',
            'get-started/library/search-the-library',
          ]
        },
        {
          type: 'category',
          label: 'Sumo Logic Apps',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'get-started/library/sumo-logic-apps'},
          items: [
            'get-started/library/install-apps',
            'get-started/library/run-searches-from-apps',
            'get-started/library/log-analysis-quickstart-app'
          ]
        },
      ],
    },
    {
      //Add a category and docs per quickstart guide
      type: 'category',
      label: 'Quickstarts and Tutorials',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'quickstart/index'},
      items: [
        'quickstart/quickstart-aws',
        'quickstart/quickstart-github',
        'quickstart/quickstart-k8s',
      ],
    },
    {
      //Put in stuff to test, will be moved later!
      type: 'category',
      label: 'Converted Docs',
      collapsible: true,
      collapsed: true,
      items: [
        'manage/security/installation-tokens',
        'CSE/global-intel'
      ],
     },
  ],
  manage: [
    {
      type: 'category',
      label: 'Collection',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'manage/collection/index'},
      items: [
        'manage/collection/search-for-a-collector-or-source',
        'manage/collection/start-stop-collector-using-scripts',
        'manage/collection/edit-collector',
        'manage/collection/restart-collectors',
        'manage/collection/edit-source',
        'manage/collection/pause-and-resume-source',
        'manage/collection/delete-collector-or-source',
        'manage/collection/set-collector-cpu-usage-target',
        'manage/collection/upgrade-collectors',
        'manage/collection/collector-logs',
        {
          type: 'category',
          label: 'Processing Rules',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'manage/collection/processing-rules/index'},
          items: [
            'manage/collection/processing-rules/create-a-processing-rule',
            'manage/collection/processing-rules/data-forwarding-rules',
            'manage/collection/processing-rules/hash-rules',
            'manage/collection/processing-rules/include-and-exclude-rules',
            'manage/collection/processing-rules/metrics-include-and-exclude-rules',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Connections and Integrations',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'manage/connections-and-integrations/index'},
      items: [
        {
          type: 'category',
          label: 'Webhook Connections',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'manage/connections-and-integrations/webhook-connections/index'},
          items: [
            'manage/connections-and-integrations/webhook-connections/schedule-searches-for-webhook-connections',
            'manage/connections-and-integrations/webhook-connections/set-up-webhook-connections',
            'manage/connections-and-integrations/webhook-connections/use-the-audit-index-with-webhook-connections',
            'manage/connections-and-integrations/webhook-connections/aws-lambda',
            'manage/connections-and-integrations/webhook-connections/cloud-soar',
            'manage/connections-and-integrations/webhook-connections/datadog',
            'manage/connections-and-integrations/webhook-connections/hipchat',
            'manage/connections-and-integrations/webhook-connections/microsoft-azure-functions',
            'manage/connections-and-integrations/webhook-connections/microsoft-teams',
            'manage/connections-and-integrations/webhook-connections/new-relic',
            'manage/connections-and-integrations/webhook-connections/opsgenie-legacy',
            'manage/connections-and-integrations/webhook-connections/opsgenie',
            'manage/connections-and-integrations/webhook-connections/pagerduty',
            'manage/connections-and-integrations/webhook-connections/slack',
            {
              type: 'category',
              label: 'Jira',
              collapsible: true,
              collapsed: true,
              link: {type: 'doc', id: 'manage/connections-and-integrations/webhook-connections/jira/index'},
              items: [
                'manage/connections-and-integrations/webhook-connections/jira/jira-cloud',
                'manage/connections-and-integrations/webhook-connections/jira/jira-server',
                'manage/connections-and-integrations/webhook-connections/jira/jira-service-desk',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'ServiceNow',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'manage/connections-and-integrations/servicenow/index'},
          items: [
            'manage/connections-and-integrations/servicenow/launch-investigations',
            'manage/connections-and-integrations/servicenow/set-up-searches-for-servicenow-integration',
            'manage/connections-and-integrations/servicenow/set-up-servicenow-connections',
            'manage/connections-and-integrations/servicenow/set-up-a-servicenow-incident-webhook-connection',
          ],
        },
        'manage/connections-and-integrations/sumo-logic-add-on-for-heroku',
        'manage/connections-and-integrations/jfrog-artifactory-sumo-logic-integration',
      ],
    },
  ],
  dashboards: [
    {
      //Add a category and docs per quickstart guide
      type: 'category',
      label: 'Dashboards (New)',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'dashboards-new/about-dashboard-new'},
      items: [
        'dashboards-new/create-a-dashboard-new',
        'dashboards-new/dashboard-new-faqs',
        'dashboards-new/drill-down-to-discover-root-causes',
        'dashboards-new/export-dashboard-new',
        'dashboards-new/filter-template-variables',
        'dashboards-new/link-dashboard-to-explore', 
        'dashboards-new/link-dashboard-new',
        'dashboards-new/locate-deviations-time-series',
        {
          //Add a category and docs per quickstart guide
          type: 'category',
          label: 'Panels',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'dashboards-new/panels'},
          items: [
            'dashboards-new/panels/modify-chart',
            'dashboards-new/panels/area-charts',
            'dashboards-new/panels/bar-charts',
            'dashboards-new/panels/box-plot-charts',
            'dashboards-new/panels/bubble-charts',
            'dashboards-new/panels/column-charts',
            'dashboards-new/panels/combo-charts',
            'dashboards-new/panels/line-charts',
            'dashboards-new/panels/map-charts',
            'dashboards-new/panels/markdown-syntax',
            'dashboards-new/panels/pie-charts',
            'dashboards-new/panels/scatter-charts',
            'dashboards-new/panels/single-value-charts',
            'dashboards-new/panels/table-charts',
          ],
        },
        'dashboards-new/set-custom-time-ranges',
        'dashboards-new/share-a-dashboard-new',
      ],
    },
    {
      //Add a category and docs per quickstart guide
      type: 'category',
      label: 'Monitors',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'monitors/index'},
      items: [
        'monitors/monitor-faq',
        'monitors/terminology',
        'monitors/alert-response',
        'monitors/alert-response-faq',
        'monitors/difference-from-scheduled-searches',
        'monitors/template-variables',
      ],
    },
  ],
  searchlogs: [
    //Navigation for Search, Logs
    'search/index',
    {
      type: 'category',
      label: 'Get Started with Searches',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'search/get-started-with-search/index'},
      items: [
        {
          type: 'category',
          label: 'Search Basics',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'search/get-started-with-search/search-basics/index'},
          items: [
            'search/get-started-with-search/search-basics/about-search-basics',
            'search/get-started-with-search/search-basics/built-in-metadata',
            'search/get-started-with-search/search-basics/chart-search-results',
            'search/get-started-with-search/search-basics/comments-search-queries',
            'search/get-started-with-search/search-basics/pause-cancel-search',
            'search/get-started-with-search/search-basics/quick-search-collectors-sources',
            'search/get-started-with-search/search-basics/reference-field-special-characters',
            'search/get-started-with-search/search-basics/save-search',
            'search/get-started-with-search/search-basics/search-autocomplete',
            'search/get-started-with-search/search-basics/search-large-messages',
            'search/get-started-with-search/search-basics/search-surrounding-messages',
            'search/get-started-with-search/search-basics/share-link-to-search',
            'search/get-started-with-search/search-basics/time-range-expressions',
            'search/get-started-with-search/search-basics/view-search-results-json-logs',
            'search/get-started-with-search/search-basics/view-traces-search-results',
          ],
        },
        {
          type: 'category',
          label: 'How to Use the Search Page',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'search/get-started-with-search/search-page/index'},
          items: [
            'search/get-started-with-search/search-page/add-saved-search-favorites',
            'search/get-started-with-search/search-page/change-time-range-in-histogram',
            {
              type: 'category',
              label: 'Field Browser',
              collapsible: true,
              collapsed: true,
              link: {type: 'doc', id: 'search/get-started-with-search/search-page/field-browser/index'},
              items: [
                'search/get-started-with-search/search-page/field-browser/search-from-field-browser',
                'search/get-started-with-search/search-page/field-browser/show-hide-fields-in-field-browser',
              ],
            },
            'search/get-started-with-search/search-page/modify-search-from-messages-tab',
            'search/get-started-with-search/search-page/navigate-through-search-results',
            'search/get-started-with-search/search-page/search-highlighting',
            'search/get-started-with-search/search-page/search-load-indicator',
            'search/get-started-with-search/search-page/search-modes',
            'search/get-started-with-search/search-page/set-messages-tab-preferences',
            'search/get-started-with-search/search-page/wildcards-in-full-text-searches',
          ],
        },
        {
          type: 'category',
          label: 'Build Searches',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'search/get-started-with-search/build-search/index'},
          items: [
            'search/get-started-with-search/build-search/best-practices-search',
            'search/get-started-with-search/build-search/dynamic-parsing',
            'search/get-started-with-search/build-search/keyword-search-expressions',
            'search/get-started-with-search/build-search/search-syntax-overview',
            'search/get-started-with-search/build-search/search-templates',
            'search/get-started-with-search/build-search/set-time-range',
            'search/get-started-with-search/build-search/use-receipt-time',
            'search/get-started-with-search/build-search/use-url-to-run-search',
          ],
        },
        {
          type: 'category',
          label: 'Suggested Searches',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'search/get-started-with-search/suggested-searches/index'},
          items: [
            'search/get-started-with-search/suggested-searches/suggested-searches-apache-access-parser',
            'search/get-started-with-search/suggested-searches/suggested-searches-apache-errors-parser',
            'search/get-started-with-search/suggested-searches/suggested-searches-cisco-asa-parser',
            'search/get-started-with-search/suggested-searches/suggested-searches-microsoft-iis-parser',
            'search/get-started-with-search/suggested-searches/suggested-searches-windows-events',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Behavior Insights',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'search/behavior-insights/index'},
      items: [
        'search/behavior-insights/logexplain',
        'search/behavior-insights/logreduce-keys',
        'search/behavior-insights/logreduce-values',
      ],
    },
    {
      type: 'category',
      label: 'Live Tail',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'search/live-tail/index'},
      items: [
        'search/live-tail/about-live-tail',
        'search/live-tail/filter-live-tail',
        'search/live-tail/live-tail-cli',
        'search/live-tail/live-tail-highlighting',
        'search/live-tail/live-tail-preferences',
        'search/live-tail/live-tail-show-in-search',
        'search/live-tail/multiple-live-tails',
      ],
    },
    'search/logcompare',
    {
      type: 'category',
      label: 'LogReduce',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'search/logreduce/index'},
      items: [
        'search/logreduce/logreduce-operator',
        'search/logreduce/detect-patterns-with-logreduce',
        'search/logreduce/influence-the-logreduce-outcome',
        'search/logreduce/understand-the-logreduce-relevance-column',
      ],
    },
    'search/time-compare',
    {
      type: 'category',
      label: 'Lookup Tables',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'search/lookup-tables/index'},
      items: [
        'search/lookup-tables/create-a-lookup-table',
        'search/lookup-tables/manage-and-update-lookup-tables',
      ],
    },
    'search/optimize-search-performance',
    'search/optimizing-search-with-partitions',
    'search/subqueries',
    {
      type: 'category',
      label: 'Search Cheat Sheets',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'search/search-cheat-sheets/index'},
      items: [
        'search/search-cheat-sheets/general-search-examples-cheatsheet',
        'search/search-cheat-sheets/grep-searching-with-sumo-cheatsheet',
        'search/search-cheat-sheets/iis-search-examples-cheatsheet',
        'search/search-cheat-sheets/log-operators-cheat-sheet',
      ],
    },
    {
      type: 'category',
      label: 'Search Query Language',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'search/search-query-language/index'},
      items: [
        {
          type: 'category',
          label: 'Parse Operators',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'search/search-query-language/parse-operators/index'},
          items: [
            'search/search-query-language/parse-operators/parse-predictable-patterns-using-an-anchor',
            'search/search-query-language/parse-operators/parse-variable-patterns-using-regex',
            'search/search-query-language/parse-operators/parse-json-formatted-logs',
            'search/search-query-language/parse-operators/parse-keyvalue-formatted-logs',
            'search/search-query-language/parse-operators/parse-csv-formatted-logs',
            'search/search-query-language/parse-operators/parse-delimited-logs-using-split',
            'search/search-query-language/parse-operators/parse-xml-formatted-logs',
            'search/search-query-language/parse-operators/parse-field-option',
            'search/search-query-language/parse-operators/parse-nodrop-option',
            'search/search-query-language/parse-operators/parse-date',
            'search/search-query-language/parse-operators/parse-hex',
          ],
        },
        {
          type: 'category',
          label: 'Group or Aggregate Operators',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'search/search-query-language/group-aggregate-operators/index'},
          items: [
            'search/search-query-language/group-aggregate-operators/avg',
            'search/search-query-language/group-aggregate-operators/count-count-distinct-and-count-frequent',
            'search/search-query-language/group-aggregate-operators/first-and-last',
            'search/search-query-language/group-aggregate-operators/median',
            'search/search-query-language/group-aggregate-operators/min-and-max',
            'search/search-query-language/group-aggregate-operators/most-recent-and-least-recent',
            'search/search-query-language/group-aggregate-operators/percentile-pct',
            'search/search-query-language/group-aggregate-operators/pct-sampling',
            'search/search-query-language/group-aggregate-operators/standard-deviation',
            'search/search-query-language/group-aggregate-operators/sum',
            'search/search-query-language/group-aggregate-operators/values',
          ],
        },
        'search/search-query-language/field-expressions',
        {
          type: 'category',
          label: 'Math Expressions',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'search/search-query-language/math-expressions/index'},
          items: [
            'search/search-query-language/math-expressions/abs',
            'search/search-query-language/math-expressions/acos',
            'search/search-query-language/math-expressions/asin',
            'search/search-query-language/math-expressions/atan',
            'search/search-query-language/math-expressions/atan2',
            'search/search-query-language/math-expressions/cbrt',
            'search/search-query-language/math-expressions/ceil',
            'search/search-query-language/math-expressions/cos',
            'search/search-query-language/math-expressions/cosh',
            'search/search-query-language/math-expressions/exp',
            'search/search-query-language/math-expressions/expm1',
            'search/search-query-language/math-expressions/floor',
            'search/search-query-language/math-expressions/hypot',
            'search/search-query-language/math-expressions/isnan-and-isinfinity',
            'search/search-query-language/math-expressions/log',
            'search/search-query-language/math-expressions/log10',
            'search/search-query-language/math-expressions/log1p',
            'search/search-query-language/math-expressions/round',
            'search/search-query-language/math-expressions/sin',
            'search/search-query-language/math-expressions/sinh',
            'search/search-query-language/math-expressions/sqrt',
            'search/search-query-language/math-expressions/tan',
            'search/search-query-language/math-expressions/tanh',
            'search/search-query-language/math-expressions/todegrees',
            'search/search-query-language/math-expressions/toradians',
          ],
        },
        {
          type: 'category',
          label: 'Search Operators',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'search/search-query-language/search-operators/index'},
          items: [
            'search/search-query-language/search-operators/accum',
            'search/search-query-language/search-operators/as-operator',
            'search/search-query-language/search-operators/asn-lookup',
            'search/search-query-language/search-operators/backshift',
            'search/search-query-language/search-operators/basedecode',
            'search/search-query-language/search-operators/baseencode',
            'search/search-query-language/search-operators/bin',
            'search/search-query-language/search-operators/cat',
            'search/search-query-language/search-operators/cidr',
            'search/search-query-language/search-operators/compare',
            'search/search-query-language/search-operators/concat',
            'search/search-query-language/search-operators/contains',
            'search/search-query-language/search-operators/dectohex',
            'search/search-query-language/search-operators/dedup',
            'search/search-query-language/search-operators/diff',
            'search/search-query-language/search-operators/fields-operator',
            'search/search-query-language/search-operators/fillmissing',
            'search/search-query-language/search-operators/filter-operator',
            'search/search-query-language/search-operators/format',
            'search/search-query-language/search-operators/formatdate',
            'search/search-query-language/search-operators/geo-lookup',
            'search/search-query-language/search-operators/geoip',
            'search/search-query-language/search-operators/hash',
            'search/search-query-language/search-operators/haversine',
            'search/search-query-language/search-operators/hextoascii',
            'search/search-query-language/search-operators/hextodec',
            'search/search-query-language/search-operators/if-operator',
            'search/search-query-language/search-operators/in-operator',
            'search/search-query-language/search-operators/ipv4tonumber',
            'search/search-query-language/search-operators/isnull-isempty-isblank',
            'search/search-query-language/search-operators/isnumeric',
            'search/search-query-language/search-operators/isprivateip',
            'search/search-query-language/search-operators/ispublicip',
            'search/search-query-language/search-operators/isreservedip',
            'search/search-query-language/search-operators/isvalidip',
            'search/search-query-language/search-operators/join',
            'search/search-query-language/search-operators/length',
            'search/search-query-language/search-operators/limit',
            'search/search-query-language/search-operators/lookup',
            'search/search-query-language/search-operators/lookup-classic',
            'search/search-query-language/search-operators/lookupcontains',
            'search/search-query-language/search-operators/luhn',
            'search/search-query-language/search-operators/manually-casting-string-data-to-a-number',
            'search/search-query-language/search-operators/matches',
            'search/search-query-language/search-operators/now',
            'search/search-query-language/search-operators/num',
            'search/search-query-language/search-operators/outlier',
            'search/search-query-language/search-operators/predict',
            'search/search-query-language/search-operators/queryendtime',
            'search/search-query-language/search-operators/querystarttime',
            'search/search-query-language/search-operators/querytimerange',
            'search/search-query-language/search-operators/replace',
            'search/search-query-language/search-operators/rollingstd',
            'search/search-query-language/search-operators/save',
            'search/search-query-language/search-operators/save-lookups-classic',
            'search/search-query-language/search-operators/sessionize',
            'search/search-query-language/search-operators/smooth',
            'search/search-query-language/search-operators/sort',
            'search/search-query-language/search-operators/substring',
            'search/search-query-language/search-operators/threatip',
            'search/search-query-language/search-operators/timeslice',
            'search/search-query-language/search-operators/timeslice-join-results',
            'search/search-query-language/search-operators/tolowercase-and-touppercase',
            'search/search-query-language/search-operators/top',
            'search/search-query-language/search-operators/topk',
            'search/search-query-language/search-operators/total',
            'search/search-query-language/search-operators/tourl',
            'search/search-query-language/search-operators/trace',
            'search/search-query-language/search-operators/transpose',
            'search/search-query-language/search-operators/trim',
            'search/search-query-language/search-operators/urldecode',
            'search/search-query-language/search-operators/urlencode',
          ],
        },
        {
          type: 'category',
          label: 'Transaction Analytics',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc', 
            id: 'search/search-query-language/transaction-analytics/index',
          },
          items: [
            'search/search-query-language/transaction-analytics/merge-operator',
            'search/search-query-language/transaction-analytics/transaction-operator',
            'search/search-query-language/transaction-analytics/flow-diagrams',
            'search/search-query-language/transaction-analytics/transactionize-operator',
            ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Search FAQs',
      collapsible: true,
      collapsed: true,
      items: [
        'search/search-faqs/export-results-of-saved-file',
        'search/search-faqs/group-messages-based-on-field',
        'search/search-faqs/searching-by-keyword-returns-no-results',
      ],
    },
  ],
  integrations: [
    'integrations/integrations',
    {
      type: 'category',
      label: 'PCI Compliance',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'integrations/pci-compliance/pci-compliance'},
      items: [
        'integrations/pci-compliance/setup-sumologic-pci-app',
        'integrations/pci-compliance/pci-reports',
        'integrations/pci-compliance/pci-dashboards',
      ],
    },
  ],
  //Contribution guide for documentation
  contribution: [
    {
      type: 'category',
      label: 'Contribution Guide',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'contribution/index'},
      items: [
        'contribution/create-document',
        'contribution/markdown-features',
        'contribution/release-notes',
        'contribution/build-deploy',
        'contribution/translate',
        {
          type: 'category',
          label: 'Templates',
          collapsible: true,
          collapsed: false,
          items: [
            'contribution/templates/partner-app',
            'contribution/templates/template-doc'
          ]
        }
      ],
    },
  ],
}
