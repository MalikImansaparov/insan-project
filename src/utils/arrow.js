import Arrow from '@elsdoerfer/react-arrow';

export const RenderArrow = props => (
<Arrow
        color={'#EAF1F8'}
        angle={props.angle}
        arrowHeadFilled={false}
        lineWidth={props.line}
        length={props.lenght}
        style={{
            width: `${props.width}`,
        }}
    />
)