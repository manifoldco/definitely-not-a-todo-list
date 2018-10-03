import styled from 'styled-components';

export var StyledChart = styled.svg.withConfig({
  displayName: 'StyledChart',
  componentId: 'sc-1nae0gf-0'
})(['display:block;max-width:100%;overflow:visible;', ''], function (props) {
  return props.theme.chart && props.theme.chart.extend;
});