import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";

/**
 * @namespace de.octavia.kleinehelden.controller
 */
export default class Main extends BaseController {
	
	public onAddToCart(): void {
		const view = this.getView();
		const viewModel = view.getModel("viewModel") as JSONModel;

		const currentCartCount = viewModel.getProperty("/cartCount") as number;
		viewModel.setProperty("/cartCount", currentCartCount + 1);
	}

}
