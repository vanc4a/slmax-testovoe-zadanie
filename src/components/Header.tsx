import React, {useContext} from 'react';
import {Svg, Ellipse, Text as SvgText} from 'react-native-svg';
import {Theme} from '../App';
import {width, interval} from '../styles';

const Header = () => {
  const theme = useContext(Theme);

  return (
    <Svg height={width / 3} width={width * 1.01}>
      <Ellipse rx={width} ry={width / 5} fill={theme.backgroundHeader} />
      <Ellipse
        cx={width / 1.2}
        rx={width}
        ry={width / 5}
        fill={theme.foregroundHeader}
      />
      <SvgText
        fontSize={interval}
        textAnchor="middle"
        x={width / 2}
        y={interval}
        fill="white">
        Заметки
      </SvgText>
    </Svg>
  );
};

export default Header;
