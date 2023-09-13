import { PriceScaleMode, PriceScaleOptions } from '../../model/price-scale';

export const priceScaleOptionsDefaults: PriceScaleOptions = {
	autoScale: true,
	mode: PriceScaleMode.Normal,
	invertScale: false,
	alignLabels: true,
	borderVisible: true,
	borderColor: '#FAFAFA',
	entireTextOnly: false,
	visible: false,
	ticksVisible: true,
	scaleMargins: {
		bottom: 0.07,
		top: 0.07,
	},
};
