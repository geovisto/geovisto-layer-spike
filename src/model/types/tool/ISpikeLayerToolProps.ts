// Geovisto core
import { ILayerToolProps } from "geovisto";

import ISpikeLayerToolDimensions from "./ISpikeLayerToolDimensions";

/**
 * This type provides the specification of the spike layer tool props model.
 * 
 * @author Vladimir Korencik
 */
type ISpikeLayerToolProps = ILayerToolProps & {
    dimensions?: ISpikeLayerToolDimensions;
};

export default ISpikeLayerToolProps;
