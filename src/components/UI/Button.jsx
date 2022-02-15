import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) =>
    props.primary ? 'palevioletred' : 'transparent'};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  padding: 0.25em 1em;
  border: ${(props) => (props.primary ? 'none' : '2px solid palevioletred')};
  border-radius: 3px;
  type: ${(props) => (props.type ? props.type : 'submit')}
  &:hover {
    background-color: ${(props) =>
      props.primary ? 'transparent' : 'palevioletred'};
    color: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.col ? 'column' : 'row')};
  justify-content: ${(props) =>
    props.center
      ? 'center'
      : props.start
      ? 'start'
      : props.spaceBetween
      ? 'space-between'
      : props.spaceAround
      ? 'space-around'
      : props.spaceEvenly
      ? 'space-evenly'
      : 'center'};
  align-items: ${(props) =>
    props.middle
      ? 'center'
      : props.alignStart
      ? 'start'
      : props.end
      ? 'end'
      : props.stretch
      ? 'stretch'
      : 'center'};
  padding: ${(props) => props.p && props.p + 'rem'};
  margin: ${(props) => props.m && props.m + 'rem'};
  padding-left: ${(props) => props.pl && props.pl + 'rem'};
  padding-right: ${(props) => props.pr && props.pr + 'rem'};
  padding-top: ${(props) => props.pt && props.pt + 'rem'};
  padding-bottom: ${(props) => props.pb && props.pb + 'rem'};
  margin-left: ${(props) => props.ml && props.ml + 'rem'};
  margin-right: ${(props) => props.mr && props.mr + 'rem'};
  margin-top: ${(props) => props.mt && props.mt + 'rem'};
  margin-bottom: ${(props) => props.mb && props.mb + 'rem'};
`;

export const Box = styled.div`
  background: ${(props) => props.bg && props.bg};
  text-align: ${(props) => (props.center ? 'center' : 'start')};
  border-radius: ${(props) => props.borderRadius && props.borderRadius + 'px'};
  padding: ${(props) => props.p && props.p + 'rem'};
  margin: ${(props) => props.m && props.m + 'rem'};
  padding-left: ${(props) => props.pl && props.pl + 'rem'};
  padding-right: ${(props) => props.pr && props.pr + 'rem'};
  padding-top: ${(props) => props.pt && props.pt + 'rem'};
  padding-bottom: ${(props) => props.pb && props.pb + 'rem'};
  margin-left: ${(props) => props.ml && props.ml + 'rem'};
  margin-right: ${(props) => props.mr && props.mr + 'rem'};
  margin-top: ${(props) => props.mt && props.mt + 'rem'};
  margin-bottom: ${(props) => props.mb && props.mb + 'rem'};
`;
