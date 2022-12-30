import { ILayerToolProps } from "geovisto";
import ISpikeLayerToolDimensions from "./ISpikeLayerToolDimensions";

type ISpikeLayerToolProps = ILayerToolProps & {
    dimensions?: ISpikeLayerToolDimensions;
};

export default ISpikeLayerToolProps;
