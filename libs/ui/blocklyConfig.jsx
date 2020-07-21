const INITIAL_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';

const INITIAL_TOOLBOX_XML = `
<xml id="toolbox" style="display: none">
  <category name="data" categorystyle="data">
    <block type="data_colors"></block>
    <block type="data_earthquakes"></block>
    <block type="data_penguins"></block>
    <block type="data_sequence"></block>
    <block type="data_user"></block>
  </category>
  <category name="transform" categorystyle="transform">
    <block type="transform_drop"></block>
    <block type="transform_filter"></block>
    <block type="transform_groupBy"></block>
    <block type="transform_mutate"></block>
    <block type="transform_select"></block>
    <block type="transform_sort"></block>
    <block type="transform_summarize"></block>
    <block type="transform_ungroup"></block>
    <block type="transform_unique"></block>
  </category>
  <category name="plot" categorystyle="plot">
    <block type="plot_bar"></block>
    <block type="plot_box"></block>
    <block type="plot_dot"></block>
    <block type="plot_histogram"></block>
    <block type="plot_scatter"></block>
  </category>
  <category name="stats" categorystyle="stats">
    <block type="stats_ttest_one"></block>
    <block type="stats_ttest_two"></block>
  </category>
  <category name="op" categorystyle="op">
    <block type="op_arithmetic"></block>
    <block type="op_negate"></block>
    <block type="op_compare"></block>
    <block type="op_logical"></block>
    <block type="op_not"></block>
    <block type="op_type"></block>
    <block type="op_convert"></block>
    <block type="op_datetime"></block>
    <block type="op_conditional"></block>
  </category>
  <category name="value" categorystyle="value">
    <block type="value_column"></block>
    <block type="value_datetime"></block>
    <block type="value_logical"></block>
    <block type="value_number"></block>
    <block type="value_text"></block>
    <block type="value_rownum"></block>
    <block type="value_exponential"></block>
    <block type="value_normal"></block>
    <block type="value_uniform"></block>
  </category>
  <category name="combine" categorystyle="combine">
    <block type="combine_glue"></block>
    <block type="combine_join"></block>
    <block type="combine_notify"></block>
  </category>
</xml>`


const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_XML,
};

export default ConfigFiles;
