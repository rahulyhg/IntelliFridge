/* eslint-disable */
// TODO Bouton ajouter à la liste
//TODO Quand quantité du produit dans contenu = 0 demander si il veut l'ajouter à la liste
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import SkyLight from 'react-skylight';
import logo from './logo.svg';
import $ from "jquery";
import jwt from "jsonwebtoken";
/**
 * Bouton déconnexion
 */
class TopHome extends Component {
	render() {
		return (
			<div className="top">
				<a href="deconnect.php" className="logout"><i className="fa fa-sign-out" aria-hidden="true"></i></a>
				<div id="logo">
					<img src={logo}/>
				</div>
			</div>
		);
	}
}

class TopPages extends Component {
	render() {
		return (
			<div className="top">
				<a href="deconnect.php" className="logout"><i className="fa fa-sign-out" aria-hidden="true"></i></a>
				<div id="logo"><img src="/assets/images/dark-red/logo.svg"/></div>
				<div id="home">
					<Link to="/">
						<img src="/assets/images/dark-red/home.svg"/>
					</Link>
				</div>
			</div>
		);
	}
}

class Left extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		addListEvents("Left");
	}

	render() {

		var itemsInOutPopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '270px',
			width: '380px',
			margin: '0',
			top: '160px',
			left: '322px',
			padding: '0'
		}

		var scanPopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '200px',
			width: '250px',
			margin: '0',
			top: '200px',
			left: '387px'
		}
		return (
			<div id="left-part" className="side-part main-part">
				<h2>Ajouter/retirer<br/>des aliments</h2>
				<div id="left-block" className="side-block">
					<div className="separator"></div>
					<a href="#" onClick={() => this.refs.popupAddItems.show()}>
						<img id="fridge-add" className="left-button" src="/assets/images/add-to-fridge.svg"/>
					</a>
					<a href="#" onClick={() => this.refs.popupRemoveItems.show()}>
						<img id="fridge-remove" className="left-button" src="/assets/images/remove-from-fridge.svg"/>
					</a>
				</div>
				<SkyLight hideOnOverlayClicked dialogStyles={itemsInOutPopupStyle} ref="popupAddItems" id="add-items-popup" className="popup items-in-out">
					<h1>Comment ?</h1>
					<div className="methods-buttons">
						<Link id="scanLaunch" to="/scan/add" className="method">
							<span>
								<img src="/assets/images/barcode.svg"/>
								<h3>Scanner</h3>
							</span>
						</Link>
						<Link to="/products/add" className="method">
							<span>
								<img src="/assets/images/hand.svg"/>
								<h3>Ajouter manuellement</h3>
							</span>
						</Link>
					</div>
				</SkyLight>
				<SkyLight hideOnOverlayClicked dialogStyles={itemsInOutPopupStyle} ref="popupRemoveItems" id="add-items-popup" className="popup items-in-out">
					<h1>Comment ?</h1>
					<div className="methods-buttons">
						<Link id="scanLaunch" to="/scan/remove" className="method">
							<span>
								<img src="/assets/images/barcode.svg"/>
								<h3>Scanner</h3>
							</span>
						</Link>
						<Link to="/products/remove" className="method">
							<span>
								<img src="/assets/images/hand.svg"/>
								<h3>Retirer manuellement</h3>
							</span>
						</Link>
					</div>
				</SkyLight>
			</div>
		);
	}
}

class RightHome extends Component {

	render() {

		var sendPopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '200px',
			width: '250px',
			margin: '0',
		    top: '200px',
    		left: '387px'
		}

		return (
			<div id="right-part" className="side-part main-part">
				<h2>Ma liste de<br/>courses</h2>
				<div id="right-block" className="side-block">
					<div className="separator"></div>
					<Link to="/list">
						<div id="view-list" className="right-button">
						    <i className="fa fa-search fa-4x" aria-hidden="true"></i>
						    <h3>Voir</h3>
						</div>
					</Link>
					<a href="#" onClick={() => this.refs.popupSend.show()}>
						<div id="send-list" className="right-button">
						    <i className="fa fa-mobile fa-5x" aria-hidden="true"></i>
						    <h3>Envoyer</h3>
						</div>
					</a>
				</div>
				<SkyLight hideOnOverlayClicked dialogStyles={sendPopupStyle} ref="popupSend" id="send-method-popup" className="popup">
					<h1>Comment ?</h1>
					<div className="send-fields">
						<div>
							<input type="tel" name="tel-number" placeholder="sms"/> <img src="/assets/images/dark-red/go-button.svg"/>
						</div>
						<div>
							<input type="email" name="email-address" placeholder="email"/> <img src="/assets/images/dark-red/go-button.svg"/>
						</div>
					</div>
				</SkyLight>
			</div>
		);
	}
}

class RightList extends Component {
	constructor(props){
		super(props);
	}

	render() {

		var emptyPopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '200px',
			width: '300px',
			margin: '0',
		    top: '200px',
    		left: '362px'
		}

		var sendPopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '200px',
			width: '250px',
			margin: '0',
		    top: '200px',
    		left: '387px'
		}

		return (
			<div id="right-part" className="side-part main-part">
				<h2>Ma liste de<br/>courses</h2>
				<div id="right-block" className="side-block">
					<div className="separator"></div>
					<a href="#" onClick={() => this.refs.popupEmpty.show()}>
						<div id="empty-list" className="right-button">
						    <i className="fa fa-trash fa-4x" aria-hidden="true"></i>
						    <h3>Vider</h3>
						</div>
					</a>
					<a href="#" onClick={() => this.refs.popupSend.show()}>
						<div id="send-list" className="right-button">
							<i className="fa fa-mobile fa-5x" aria-hidden="true"></i>
							<h3>Envoyer</h3>
						</div>
					</a>
				</div>
				<SkyLight hideOnOverlayClicked dialogStyles={emptyPopupStyle} ref="popupEmpty" id="empty-list-popup" className="popup">
					<h1>Vider la liste ?</h1>
					<div id="confirm-buttons">
						<a onClick={removeList} href="#">
							<img src="/assets/images/dark-red/confirm-button.svg"/>
						</a>
					</div>
				</SkyLight>
				<SkyLight hideOnOverlayClicked dialogStyles={sendPopupStyle} ref="popupSend" id="send-method-popup" className="popup">
					<h1>Comment ?</h1>
					<div className="send-fields">
						<div>
							<input type="tel" name="tel-number" placeholder="sms"/> <img src="/assets/images/dark-red/go-button.svg"/>
						</div>
						<div>
							<input type="email" name="email-address" placeholder="email"/> <img src="/assets/images/dark-red/go-button.svg"/>
						</div>
					</div>
				</SkyLight>
			</div>
		);
	}
}

class FridgeList extends Component {
	constructor(){
		super();
		apiRequest("GET", "fridges/list", null, function(an){
			setFridgeList(an);
			this.render();
		}, function (an) {
			console.log("Erreur : \n"+JSON.stringify(an));
		});
	}
	componentDidMount(){
		$(".removefridgee").on("click", function (e) {
			e.preventDefault();
			removeFridge($(this).attr("id"));
		});
	}
	render() {
		if(fridgesList == undefined){
			return(
				<div id="fridges">
					Vous n'avez pas de frigos
				</div>
			);
		}
		return (
			<div id="fridges">
				{fridgesList.map((dynamicComponent, i) => <Fridge
					key = {i} componentData = {dynamicComponent}/>)}
			</div>
		);
	}
}

class Fridge extends Component {
	render() {
		return (
			<div className="fridge">
				<a className="removefridgee" id={this.props.componentData.FrigoId} href="#"><i className="remove fa fa-times" aria-hidden="true"></i></a>
				<Link to={"/fridgeContent/"+this.props.componentData.FrigoId}>
					<img src="/assets/images/fridge.svg"/>
					<h3>{this.props.componentData.FrigoNom}</h3>
				</Link>
			</div>
		);
	}
}

class MiddleHome extends Component {
	componentDidMount(){
		addFridgeAdd();
	}
	render() {

		var addFridgePopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '200px',
			width: '250px',
			margin: '0',
			top: '200px',
			left: '387px'
		}

		return (
			<div id="middle-block" className="main-part">
				<h1>Mes frigos</h1>
				<FridgeList />
				<div id="buttons">
					<a id="add-fridge" href="#" onClick={preventDefault}><img src="/assets/images/dark-red/plus-button.svg" onClick={() => this.refs.popupAddFridge.show()}/></a>
					<Link to="/settings"><img src="/assets/images/dark-red/gear-button.svg"/></Link>
				</div>
				<SkyLight hideOnOverlayClicked dialogStyles={addFridgePopupStyle} ref="popupAddFridge" id="send-method-popup" className="popup">
					<div className="send-fields">
						<div>
							<form id="addFridgeForm" onSubmit={addFridgeAdd}>
								<input type="text" name="new-fridge-name" placeholder="nom du frigo"/>
								<a id="addfridgebutton" href="#" onClick={addFridgeAdd} ><img src="/assets/images/dark-red/go-button.svg"/></a>
							</form>
						</div>
					</div>
				</SkyLight>
			</div>
		);
	}
}

class Settings extends Component {
	render() {

		var addFridgePopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '200px',
			width: '250px',
			margin: '0',
			top: '200px',
			left: '387px'
		};

		return (
			<div id="middle-block" className="main-part">
				<h1>Paramètres</h1>
				<form id="setUserSettings" id="settings">
					<label for="name">Nom :</label><input type="text" name="name" placeholder="nom"/><br/>
					<label for="surname">Prénom :</label><input type="text" name="surname" placeholder="prénom"/><br/>
					<label for="mail">Addresse e-mail :</label><input type="email" name="mail" placeholder="email"/><br/>
					<label for="language">Langue :</label><input type="text" name="language" placeholder="français" disabled/><br/>
					<label for="gender">Sexe :</label>
					<select>
						<option value="h"><i className="fa fa-mars" aria-hidden="true"></i></option>
						<option value="f"><i className="fa fa-venus" aria-hidden="true"></i></option>
					</select><br/>
				</form>
				<div id="buttons">
					<a href="#"><img src="/assets/images/dark-red/confirm-button.svg" onClick={() => this.refs.popupComfirm.show()} /></a>
					<Link to="#"><img src="/assets/images/dark-red/X-button.svg"/></Link>
				</div>
				<SkyLight hideOnOverlayClicked dialogStyles={addFridgePopupStyle} ref="popupComfirm" id="send-method-popup" className="popup">
					<div className="send-fields">
						<div>
							Etes-vous sûr?
						</div>
					</div>
				</SkyLight>
			</div>
		);
	}
}

class FridgeContent extends Component {
	componentDidMount(){
		apiRequest("GET", "fridges/getName", {FrigoId:this.props.fridge}, function(an){
			console.log(an);
			$("h1").html(an.FridgeNom);
			apiRequest("POST", "fridges/getFridgeContent", {FrigoNom : an.FridgeNom}, function(an){
				console.log(an);
				list = an;
				listFridgeContent();
				addListEvents("FridgeContent");
			}, function(an){
				console.log(an);
				if(an.status==201){
					list = "Frigo Vide.";
					this.render();
				}else{
					list = "Erreur d'API";
					this.render();
				}
			});

		}, apiError);
	}

	render() {
		console.log("ok");

		var removeItemPopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '220px',
			width: '300px',
			margin: '0',
		    top: '190px',
    		left: '362px'
		};
		if(list == undefined){
			return(<ul id="list">
				<li></li>
				<li>Erreur Interne</li>
			</ul>);
		}
		if(typeof list == 'string'){
			return(<ul id="list">
				<li></li>
				<li>{list}</li>
				</ul>);
		}else{
			return (
				<ul id="list">
					<li></li>
					{list.map((dynamicComponent, i) => <ListElem
						key = {i} componentData = {dynamicComponent}/>)}
					<SkyLight hideOnOverlayClicked dialogStyles={removeItemPopupStyle} ref="popupRemoveItem" id="empty-list-popup" className="popup">
						<h1>Retirer de la liste ?</h1>
						<div id="confirm-buttons">
							<a href="#">
								<img src="/assets/images/dark-red/confirm-button.svg"/>
							</a>
						</div>
					</SkyLight>
				</ul>
			);
		}
	}
}

class ScanList extends Component {
	componentDidMount(){
		addListEvents("Scan");
		if(this.props.scanType=="list"){
			$("select").remove();
		}
	}
	render() {

		var removeItemPopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '220px',
			width: '300px',
			margin: '0',
		    top: '190px',
    		left: '362px'
		};
		if(list == undefined){
			return(<ul id="list">
				<li></li>
				<li id="waiting">Vous n'avez encore rien scanné</li>
			</ul>);
		}
		if(typeof list == 'string'){
			return(<ul id="list">
				<li></li>
				<li>{list}</li>
				</ul>);
		}else{
			return (
				<ul id="list">
					<li></li>
					{list.map((dynamicComponent, i) => <ListElem
						key = {i} componentData = {dynamicComponent}/>)}
					<SkyLight hideOnOverlayClicked dialogStyles={removeItemPopupStyle} ref="popupRemoveItem" id="empty-list-popup" className="popup">
						<h1>Retirer de la liste ?</h1>
						<div id="confirm-buttons">
							<a href="#">
								<img src="/assets/images/dark-red/confirm-button.svg"/>
							</a>
						</div>
					</SkyLight>
				</ul>
			);
		}
	}
}

class ShoppingList extends Component {
	constructor(props){
		super(props);
		apiRequest("GET", "list/get", null, function(an){
			console.log(an);
			list = an;
			this.render();
		}, apiError);
	}

	componentDidMount(){
		addListEvents("ShoppingList");
	}
	render() {

		var quantityPopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '200px',
			width: '250px',
			margin: '0',
			top: '200px',
			left: '387px'
		}

		var removeItemPopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '220px',
			width: '300px',
			margin: '0',
			top: '190px',
			left: '362px'
		}
		if(list==undefined){
			return (
				<ul id="list">
					<li></li>
					<li>Liste de course vide</li>
				</ul>
			);
		}
		return (
			<ul id="list">
				<li></li>
				{list.map((dynamicComponent, i) => <ListElem
					key = {i} componentData = {dynamicComponent}/>)}
				<SkyLight hideOnOverlayClicked dialogStyles={removeItemPopupStyle} ref="popupRemoveItem" id="empty-list-popup" className="popup">
					<h1>Retirer de la liste ?</h1>
					<div id="confirm-buttons">
						<a href="#">
							<img src="/assets/images/dark-red/confirm-button.svg"/>
						</a>
					</div>
				</SkyLight>
				<SkyLight hideOnOverlayClicked dialogStyles={quantityPopupStyle} ref="popupQuantity" id="send-method-popup" className="popup">
					<div className="send-fields">
						<div>
							<input type="text" name="quantity" placeholder="quantité"/> <img src="/assets/images/dark-red/go-button.svg"/>
						</div>
					</div>
				</SkyLight>
			</ul>
		);
	}
}

class ProductsList extends Component {
	constructor(props){
		super(props);
		list = [];
	}

	componentDidMount(){
		productsContent();
		addListEvents("ProductsList");
	}
	render() {
		return (
			<ul id="list">
				<li></li>
				{list.map((dynamicComponent, i) => <ListElem products="yes"
					key = {i} componentData = {dynamicComponent}/>)}
			</ul>
		);
	}
}

class ListElem extends Component {
	render() {
		if(this.props.componentData.Note!=undefined) {
			return (
				<li id={this.props.componentData.ProduitId}>
					<span className="ProduitNom">{this.props.componentData.ProduitNom}</span> -
					<span className='Quantite'>{this.props.componentData.Quantite}</span> -
					<span className='DateAjout'>{this.props.componentData.DateAjout}</span> -
					<span className='Note'>{this.props.componentData.Note}</span>
					<a href="#"><i className="minus fa fa-minus" aria-hidden="true"></i></a>
					<a href="#"><i className="plus fa fa-plus" aria-hidden="true"></i></a>
					<a href="#"><i className="remove fa fa-times" aria-hidden="true"></i></a>
				</li>
			);
		}else if(this.props.products){
			return (
				<li id={this.props.componentData.ProduitNSId}>
					<span className="ProduitNSNom">{this.props.componentData.ProduitNSNomFR}</span> -
					<span id='quantite'>0</span>
					{/*TODO ajouter la photo de l'aliment quand c'est possible
					<img src="" alt={"Photo "+this.props.componentData.ProduitNSNomFR} />*/}
					<a href="#"><i className="minus fa fa-minus" aria-hidden="true"></i></a>
					<a href="#"><i className="plus fa fa-plus" aria-hidden="true"></i></a>
					<a href="#"><i className="remove fa fa-times" aria-hidden="true"></i></a>
				</li>

			);
		}else{
			return (
				<li id={this.props.componentData.ProduitId}>
					<span className="ProduitNom">{this.props.componentData.ProduitNom}</span> -
					<span className='Quantite'>{this.props.componentData.Quantite}</span> -
					<span className='DateAjout'>{this.props.componentData.DateAjout}</span>
					<a href="#"><i className="minus fa fa-minus" aria-hidden="true"></i></a>
					<a href="#"><i className="plus fa fa-plus" aria-hidden="true"></i></a>
					<a href="#"><i className="remove fa fa-times" aria-hidden="true"></i></a>
				</li>

			);
		}
	}
}

class MiddleList extends Component {
	componentDidMount(){
		if (this.props.productsType){
			addListEvents("Products");
		}
		$("#add-to-list").on("click", function (e) {
			e.preventDefault();
		});
	}
	render() {
		var itemsInOutPopupStyle = {
			backgroundColor: '#d6d6d6',
			borderRadius: '20px',
			boxShadow: 'inset 0 -5px #ff3131, inset 0 -8px #0d0d0d, 0 0 5px #0f0f0f',
			height: '270px',
			width: '380px',
			margin: '0',
			top: '160px',
			left: '322px',
			padding: '0'
		}

		if(this.props.fridge){
			return (
				<div id="middle-block" className="main-part list-block">
					<h1>{fridgeName}</h1>
					<FridgeContent fridge={this.props.fridge} />
					<div id="add-item">
						<div id="mask"></div>
						<a  onClick={() => this.refs.popupAddItems.show()}><img src="/assets/images/dark-red/plus-button.svg"/></a>
					</div>
					 <SkyLight hideOnOverlayClicked dialogStyles={itemsInOutPopupStyle} ref="popupAddItems" id="add-items-popup" className="popup items-in-out">
						 <h1>Comment ?</h1>
						 <div className="methods-buttons">
						 {//TODO vers un add du frigo en cours d'affichage
							 }
						 <Link id="scanLaunch" to="/scan/add" className="method">
							 <span>
								 <img src="/assets/images/barcode.svg"/>
								 <h3>Scanner</h3>
							 </span>
						 </Link>
						 {//TODO vers un add du frigo en cours d'affichage
							 }
						 <Link to="/products/add" className="method">
							 <span>
								 <img src="/assets/images/hand.svg"/>
								 <h3>Ajouter manuellement</h3>
							 </span>
						 </Link>
						 </div>
					 </SkyLight>
				</div>
			);
		}else if(this.props.scanType){
			return (
				<div id="middle-block" className="main-part list-block">
					<h1>Scannez votre produit</h1>
					<span id="scanType" hidden>{this.props.scanType}</span>
					<form id="addProductToFridge">
						<select name="fridgesSelect" id="fridgesSelect"></select><br/>
						<input type="number" id="ProductId" placeholder="Scannez le code barre" min="1001" required />
						<a id="submit" href="#"><img src="/assets/images/dark-red/go-button.svg" /></a>
					</form>
					<ScanList scanType={this.props.scanType} />
				</div>
			);
		}else if(this.props.productsType){
			return (
				<div id="middle-block" className="main-part list-block">
					<h1>Liste de produits</h1>
					<span id="productsType" hidden>{this.props.productsType}</span>
					<form id="productForm">
						<select name="fridgesSelect" id="fridgesSelect"></select><br/>
						<label htmlFor="productType">Type de produit : </label>
						<select name="productType" id="productType">
							<option value="0">Tous</option>
						</select>
						<br/>
						<input name="search" id="search" type="text" placeholder="Recherche" />
					</form>
					<ProductsList />
				</div>
			);
		}else{
			return (
				<div id="middle-block" className="main-part list-block">
					<h1>Ma liste</h1>
					<ShoppingList />
					<div id="add-item">
						<div id="mask"></div>
						<a href="#" id="add-to-list" onClick={() => this.refs.popupAddItems.show()}><img src="/assets/images/dark-red/plus-button.svg"/></a>
					</div>
					<SkyLight hideOnOverlayClicked dialogStyles={itemsInOutPopupStyle} ref="popupAddItems" id="add-items-popup" className="popup items-in-out">
						<h1>Comment ?</h1>
						<div className="methods-buttons">
							<Link id="scanLaunch" to="/scan/list" className="method">
							<span>
								<img src="/assets/images/barcode.svg"/>
								<h3>Scanner</h3>
							</span>
							</Link>
							<Link to="/products/list" className="method">
							<span>
								<img src="/assets/images/hand.svg"/>
								<h3>Ajouter manuellement</h3>
							</span>
							</Link>
						</div>
					</SkyLight>
				</div>
			);
		}
	}
}

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<TopHome />
				<div id="wrapper">
					<Left />
					<MiddleHome />
					<RightHome />
				</div>
			</div>
		);
	}
}

class List extends Component {
	render() {
		list=undefined;
		if(this.props.params.FridgeId){
			return (
				<div className="FridgeContent">
					<TopPages />
					<div id="wrapper">
						<MiddleList fridge={this.props.params.FridgeId} />
					</div>
				</div>
			);
		}else if(this.props.params.scanType){
			return (
				<div className="Scan">
					<TopPages />
					<div id="wrapper">
						<MiddleList scanType={this.props.params.scanType} />
					</div>
				</div>
			);
		}else if(this.props.params.productsType){
			return (
				<div className="Products">
					<TopPages />
					<div id="wrapper">
						<MiddleList productsType={this.props.params.productsType} />
					</div>
				</div>
			);
		}else{
			return (
				<div className="List">
					<TopPages />
					<div id="wrapper">
						<MiddleList />
						<RightList />
					</div>
				</div>
			);
		}
	}
}

var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Home} />
		<Route path='/list' component={List} />
		<Route path='/fridgeContent/:FridgeId' component={List} />
		<Route path='/settings' component={Settings} />
		<Route path='/scan/:scanType' component={List} />
		<Route path='/products/:productsType' component={List} />
	</Router>
);

/**************************************************************************
 ***********************Functions and JavaScript***************************
 *************************************************************************/
var apiBase;
var fridgesList, list, fridgeName=-1;
var add=0;
var product = {ProduitSId : null, ProduitSNom : null,ProduitSMarque : null, FrigoNom : null,ProduitImageUrl : null,ListeNote : null,Contenance : null };
/**
 * Permet d'aller chercher les variables de session nécessaires
 * TODO when build remettre les vraies variables de session
 */
request("GET", "http://app.intellifridge.ovh/app/getSession.php", "", storeApiDatas, apiError);
/**
 * lance le rendu de l'application
 */
render();
function render(){
	ReactDOM.render(routes, document.querySelector('#root'));
}
/**
 * Permet de faire une requète vers une page renvoyant du JSON
 * @param type type de requète. Ex : GET, POST etc
 * @param url URL de la page pour la requète
 * @param data Données envoyées pour la requète
 * @param fs Fonction lancée si la requète réussi
 * @param fe Fonction lancée si la requète ne réussit pas
 */
function request(type, url, data, fs, fe){
	$.ajax({
		async : false,
		type: type,
		url: url,
		data : data,
		dataType: 'text',
		crossDomain: true,
		xhrFields: {
			withCredentials: false
		},
		success: fs,
		error: fe
	});
}
/**
 * Change l'objet apiBase pour contenir UserId et ApiKey
 * @param an String JSON des données
 */
function storeApiDatas(an){
	apiBase = JSON.parse(an);
}
/**
 * Fonction de debug qui envoie en console le résultat
 * @param an Objet renvoyé par une requète
 */
function apiError(an){
	console.log("Erreur : \n"+JSON.stringify(an));
}
function apiSuccess(an){
	console.log("Ok : \n"+JSON.stringify(an));
}
/**
 * Permet de faire une requète vers l'API d'IntelliFridge
 * @param type type de requète. Ex : GET, POST etc
 * @param url Fin de l'URL http://api.intellifridge.ovh/v1/ pour avoir accès aux informations souhaitées
 * @param data Données envoyées pour la requète (viendra s'ajouter ApiKey et UserId automatiquement)
 * @param fs Fonction lancée si la requète réussi
 * @param fe Fonction lancée si la requète ne réussit pas
 */
function apiRequest(type, url, data, fs, fe){
	if(data!=null){
		var result={};
		$.extend(result, data, apiBase);
		var sData = JSON.stringify(result);
	}else{
		var sData = JSON.stringify(apiBase);
	}
	console.log("Requète API : \n"+type+"\n"+url+"\n"+sData);
	var sJWT = {jwt:jwt.sign(sData, "wAMxBauED07a4GurMpuD", {header:{alg: 'HS256', typ: 'JWT'}})};
	//console.log(sJWT);
	request(type, "http://api.intellifridge.ovh/v1/"+url, sJWT, function(an){
		var decoded = jwt.decode(an, {complete: true});
		console.log("Réponse : \n"+an+"\nDécodée : \n"+JSON.stringify(decoded));
		if(decoded==null){
			alert("Impossible de décoder la réponse : \n"+an);
			return -1;
		}
		if(decoded.payload.status==200){
			fs(decoded.payload.data);
		}else{
			fe(decoded.payload);
		}
	}, function(an){
		alert("Erreur d'API : \n\n"+JSON.stringify(an));
		fe(an);
		document.location.href = "/";
	});
}
function setFridgeList(data){
	fridgesList = data;
}
/**
 * Ajoute les évènements nécessaires aux différents eléments de la page
 * @param type type d'evènements à ajouter
 */
function addListEvents(type){
	switch(type){
		case "FridgeContent" :
			addEventsFridgeContent();
			break;
		case "ShoppingList" :
			addEventsShoppingList();
			break;
		case "Left" :
			addEventsLeft();
			break;
		case "Scan" :
			addEventsScan();
			break;
		case "Products" :
			addEventsProducts();
			break;
		case "ProductsList" :
			addEventsProductsList();
			break;
		default :
			console.log("No handler for this : "+type);
			break;
	}
}
/**
 * Ajoute l'evenement sur form pour ajouter un frigo
 * @param t
 */
function addFridgeAdd(t){
	//TODO fermer le popup une fois le frigo ajouté
	t.preventDefault();
	var fridgeName = $("form input").val();
	apiRequest("POST", "fridges/add", {FrigoNom : fridgeName}, function (an) {
		$("form input").val("");
		render();
	}, function (an) {
		render();
	});
}
function preventDefault(e){
	e.preventDefault();
}
/**
 * Supprime la liste de course
 */
function removeList(){
	apiRequest("POST", "list/removeAll", null, function (an) {
		console.log("Liste vidée : "+an);
	}, apiError);
}
/**
 * Supprime un frigo
 * @param id num d'id du frigo
 */
function removeFridge(id){
	//TODO waiting for API --> when sof do it
	console.log("removing fridge "+id);
}
/**
 * Ajoute les evenements liés à la page d'un frigo permettant de faire + - et x
 */
function addEventsFridgeContent(){
	//TODO ajouter les requètes API correspondantes
	$("#list a i").on("click", function (e) {
		e.preventDefault();
		var action=$(this).attr("class").split(" ")[0];
		var productId = this.closest("li").id;
		if(action=="remove"){
			//TODO add to list popup
			//TODO attendre que sof fasse la fonction (products/removeFromFridge ou products/setQuantity)
			console.log("I must remove " + productId + " from fridge : "+fridgeNam);
		}else if(action=="plus"){
			//TODO resolve Unknown error in SQL with Sof
			apiRequest("POST", "fridges/plusOneProduct", {ProductSId : $(this.closest("li")).attr("id"), FrigoId: $("select").val()}, function (an) {
				$(this.closest("li")).children("#quantite").html(parseInt($(this.closest("li")).children("#quantite").html())+1);
			}, function (an) {
				alert("Erreur : \n"+JSON.stringify(an));
			});
		}else if(action=="minus"){
			//TODO add to list popup si = 0 apres click
			//TODO resolve Unknown error in SQL with Sof
			if($(this.closest("li")).children("#quantite").html()!=0){
				apiRequest("POST", "fridges/minusOneProduct", {ProductSId : $(this.closest("li")).attr("id"), FrigoId: $("#fridgesSelect").val()}, function (an) {
					$("#"+productId+" quantite").html(0);
					$(this.closest("li")).children("#quantite").html(parseInt($(this.closest("li")).children("#quantite").html())-1);
				}, function (an) {
					alert("Erreur : \n"+JSON.stringify(an));
				})
			}
		}else{
			console.log("No behavior set for this action : "+action);
		}
	});
}
/**
 * Ajoute les evenements liés à la page de la liste de course
 */
function addEventsShoppingList(){
	$("#list a i").on("click", function (e) {
		e.preventDefault();
		var action=$(this).attr("class").split(" ")[0];
		var productId = this.closest("li").id;
		// Supprime de la liste de courses
		if(action=="remove"){
			apiRequest("POST", "list/setQuantity",
				{ProduitSId: productId, ListeQuantite: -1},
				function(an){
					$("#"+productId).remove();
				},
				apiError
			);
		// +1 à la liste de courses
		}else if(action=="plus"){
			apiRequest("POST", "list/setQuantity",
				{ProduitSId: productId, ListeQuantite: (parseInt($("#"+productId+" .Quantite").html())+1) },
				function(an){
					$("#"+productId+" .Quantite").html(parseInt($("#"+productId+" .Quantite").html())+1);
				},
				apiError
			);
		// -1 à la liste de courses
		}else if(action=="minus"){
			apiRequest("POST", "list/setQuantity",
				{ProduitSId: productId, ListeQuantite: (parseInt($("#"+productId+" .Quantite").html())-1)},
				function(an){
					if(parseInt($("#"+productId+" .Quantite").html())-1==0){
						$("#"+productId).remove();
					}else{
						$("#"+productId+" .Quantite").html(parseInt($("#"+productId+" .Quantite").html())-1);
					}
				},
				apiError
			);
		//Pas d'action dans la liste de course
		}else{
			console.log("No behavior set for this action : "+action);
		}
	});
}
// Enlève les evenements par défault de la liste de gauche dans home
function addEventsLeft(){
	$("#fridge-add").closest("a").on("click", function (e) {
		e.preventDefault();
	});
	$("#fridge-remove").closest("a").on("click", function (e) {
		e.preventDefault();
	});
	console.log($("#fridge-add").closest("a"));
}
/**
 * Ajoute les evenements nécessaires pour la gestion de la page des scans de produits
 */
function addEventsScan() {
	$("#ProductId").focus();
	$("#submit").on("click", function(e){
		e.preventDefault();
		$("form").submit();
	});
	//Rempli le select avec les frigos de l'utilisateur
	handleFridgeSelect();
	$("form").on("submit", function (e) {
		e.preventDefault();
		if($("#waiting")){
			$("#waiting").remove();
		}
		var barcode = $("#ProductId").val();
		//Définit le type d'action pour le scan effectué
		var type = $("#scanType").html();
		// si il faut ajouter le produit scanné à un frigo
		if(type=="add"){
			//Requète vers openfoodfact
			request("GET", "http://fr.openfoodfacts.org/api/v0/product/" + barcode + ".json", null, function (an) {
				//ProduitSId, ProduitSNom, ProduitSMarque, FrigoNom, ProduitImageUrl, ListeNote, Contenance
				//3179732333919
				var OFF = JSON.parse(an);
				console.log(OFF);
				if(OFF.status==1){
					product.ProduitSId = barcode;
					product.FrigoNom = $("#fridgesSelect").val();
					product.ProduitSMarque = OFF.product.brands;
					product.ProduitSNom = OFF.product.generic_name;
					product.ProduitImageUrl = OFF.product.image_url;
					product.Contenance = OFF.product.quantity;
					var status;
					if(product.ProduitSMarque == ""){
						OFFUncomplete("ProduitSMarque");
					}
					if(product.ProduitSNom  == ""){
						product.ProduitSNom = OFF.product.product_name;
						if(product.ProduitSNom  == ""){
							product.ProduitSNom = OFF.product.product_name_fr;
							if(product.ProduitSNom  == ""){
								product.ProduitSNom = OFF.product.generic_name_fr;
								if(product.ProduitSNom  == ""){
									OFFUncomplete("ProduitSNom");
								}
							}
						}
					}
					if(product.ProduitImageUrl == ""){
						product.ProduitImageUrl = image_front_small_url;
						if(product.ProduitImageUrl == ""){
							product.ProduitImageUrl = image_front_thumb_url;
							if(product.ProduitImageUrl == ""){
								product.ProduitImageUrl = image_front_url;
								if(product.ProduitImageUrl == ""){
									product.ProduitImageUrl = image_small_url;
									if(product.ProduitImageUrl == ""){
										product.ProduitImageUrl = image_thumb_url;
										if(product.ProduitImageUrl == ""){
											OFFUncomplete("ProduitImageUrl");
										}
									}
								}
							}
						}
					}
					if(product.Contenance  == ""){
						OFFUncomplete("Contenance");
					}
					function OFFUncomplete(missing){
						$("#list").append("<li>Informations OFF pas complètes ("+missing+") : "+barcode+"<br/>N'hésitez pas à aller <a href='http://fr.openfoodfacts.org/comment-ajouter-un-produit'>Ajouter les informations manquantes dans la base de données</a></li>");
						status=-1;
					}
					if(status==-1){
						$("#ProductId").val("");
						$("#ProductId").focus();
					}
					console.log(JSON.stringify(product));

					apiRequest("POST", "products/add", product, function(an){
						$("#list").append("<li><img src='"+product.ProduitImageUrl+"' alt='"+product.ProduitSNom+"'>"+product.ProduitSMarque + " - " +
							product.ProduitSNom + " - " +
							product.Contenance +" : Ajouté au frigo "+ product.FrigoNom +"</li>");
						$("#ProductId").val("");
						$("#ProductId").focus();
					}, function (an) {
						console.log("Erreur : \n"+JSON.stringify(an));
					});
					product = {ProduitSId : null, ProduitSNom : null,ProduitSMarque : null, FrigoNom : null,ProduitImageUrl : null,ListeNote : null,Contenance : null };
				}else{
					$("#list").append("<li>Produit non trouvé : "+barcode+"<br/>N'hésitez pas à aller l'<a href='http://fr.openfoodfacts.org/comment-ajouter-un-produit'>ajouter dans la base de données</a></li>");
					$("#ProductId").val("");
					$("#ProductId").focus();
				}
			}, apiError);
		// si il faut retiré le produit scanné d'un frigo
		}else if(type=="remove"){
			apiRequest("POST", "products/removeOneFromFridge", {ProduitSId:barcode, FrigoId : $("#fridgesSelect").val()})

			request("GET", "http://fr.openfoodfacts.org/api/v0/product/" + barcode + ".json", null, function (an) {
				//ProduitSId, ProduitSNom, ProduitSMarque, FrigoNom, ProduitImageUrl, ListeNote, Contenance
				//3179732333919
				var OFF = JSON.parse(an);
				console.log(OFF);
				if(OFF.status==1){
					product.ProduitSId = barcode;
					product.FrigoNom = $("#fridgesSelect").val();
					product.ProduitSMarque = OFF.product.brands;
					product.ProduitSNom = OFF.product.generic_name;
					product.ProduitImageUrl = OFF.product.image_url;
					product.Contenance = OFF.product.quantity;
					var status;
					if(product.ProduitSMarque == ""){
						OFFUncomplete("ProduitSMarque");
					}
					if(product.ProduitSNom  == ""){
						product.ProduitSNom = OFF.product.product_name;
						if(product.ProduitSNom  == ""){
							product.ProduitSNom = OFF.product.product_name_fr;
							if(product.ProduitSNom  == ""){
								product.ProduitSNom = OFF.product.generic_name_fr;
								if(product.ProduitSNom  == ""){
									OFFUncomplete("ProduitSNom");
								}
							}
						}
					}
					if(product.ProduitImageUrl == ""){
						product.ProduitImageUrl = image_front_small_url;
						if(product.ProduitImageUrl == ""){
							product.ProduitImageUrl = image_front_thumb_url;
							if(product.ProduitImageUrl == ""){
								product.ProduitImageUrl = image_front_url;
								if(product.ProduitImageUrl == ""){
									product.ProduitImageUrl = image_small_url;
									if(product.ProduitImageUrl == ""){
										product.ProduitImageUrl = image_thumb_url;
										if(product.ProduitImageUrl == ""){
											OFFUncomplete("ProduitImageUrl");
										}
									}
								}
							}
						}
					}
					if(product.Contenance  == ""){
						OFFUncomplete("Contenance");
					}
					function OFFUncomplete(missing){
						$("#list").append("<li>Informations OFF pas complètes ("+missing+") : "+barcode+"<br/>N'hésitez pas à aller <a href='http://fr.openfoodfacts.org/comment-ajouter-un-produit'>Ajouter les informations manquantes dans la base de données</a></li>");
						status=-1;
					}
					if(status==-1){
						$("#ProductId").val("");
						$("#ProductId").focus();
					}
					//TODO add to list popup si = 0 (sof renvoie 0?)
					apiRequest("POST", "products/removeOneFromFridge", {ProduitSId:barcode, FrigoId : $("#fridgesSelect").val()}, function(an){
						$("#list").append("<li><img src='"+product.ProduitImageUrl+"' alt='"+product.ProduitSNom+"'>"+product.ProduitSMarque + " - " +
							product.ProduitSNom + " - " +
							product.Contenance +" : Retiré du frigo "+ $("#fridgesSelect option:selected").html() +"</li>");
						$("#ProductId").val("");
						$("#ProductId").focus();
					}, function (an) {
						console.log("Erreur : \n"+JSON.stringify(an));
					});
					product = {ProduitSId : null, ProduitSNom : null,ProduitSMarque : null, FrigoNom : null,ProduitImageUrl : null,ListeNote : null,Contenance : null };
				}else{
					$("#list").append("<li>Produit non trouvé : "+barcode+"<br/>N'hésitez pas à aller l'<a href='http://fr.openfoodfacts.org/comment-ajouter-un-produit'>ajouter dans la base de données</a></li>");
					$("#ProductId").val("");
					$("#ProductId").focus();
				}
			}, apiError);
		// si il faut ajouter le produit scanné à la liste de course
		}else if(type=="list"){
			request("GET", "http://fr.openfoodfacts.org/api/v0/product/" + barcode + ".json", null, function (an) {
				//ProduitSId, ProduitSNom, ProduitSMarque, FrigoNom, ProduitImageUrl, ListeNote, Contenance
				//3179732333919
				var OFF = JSON.parse(an);
				console.log(OFF);
				if(OFF.status==1){
					product.ProduitSId = barcode;
					product.FrigoNom = $("#fridgesSelect").val();
					product.ProduitSMarque = OFF.product.brands;
					product.ProduitSNom = OFF.product.generic_name;
					product.ProduitImageUrl = OFF.product.image_url;
					product.Contenance = OFF.product.quantity;
					var status;
					if(product.ProduitSMarque == ""){
						OFFUncomplete("ProduitSMarque");
					}
					if(product.ProduitSNom  == ""){
						product.ProduitSNom = OFF.product.product_name;
						if(product.ProduitSNom  == ""){
							product.ProduitSNom = OFF.product.product_name_fr;
							if(product.ProduitSNom  == ""){
								product.ProduitSNom = OFF.product.generic_name_fr;
								if(product.ProduitSNom  == ""){
									OFFUncomplete("ProduitSNom");
								}
							}
						}
					}
					if(product.ProduitImageUrl == ""){
						product.ProduitImageUrl = image_front_small_url;
						if(product.ProduitImageUrl == ""){
							product.ProduitImageUrl = image_front_thumb_url;
							if(product.ProduitImageUrl == ""){
								product.ProduitImageUrl = image_front_url;
								if(product.ProduitImageUrl == ""){
									product.ProduitImageUrl = image_small_url;
									if(product.ProduitImageUrl == ""){
										product.ProduitImageUrl = image_thumb_url;
										if(product.ProduitImageUrl == ""){
											OFFUncomplete("ProduitImageUrl");
										}
									}
								}
							}
						}
					}
					if(product.Contenance  == ""){
						OFFUncomplete("Contenance");
					}
					function OFFUncomplete(missing){
						$("#list").append("<li>Informations OFF pas complètes ("+missing+") : "+barcode+"<br/>N'hésitez pas à aller <a href='http://fr.openfoodfacts.org/comment-ajouter-un-produit'>Ajouter les informations manquantes dans la base de données</a></li>");
						status=-1;
					}
					if(status==-1){
						$("#ProductId").val("");
						$("#ProductId").focus();
					}
					//TODO encoder une note pour le produit
					product.ListeNote="ok";
					console.log(JSON.stringify(product));

					apiRequest("POST", "list/addProduct", product, function(an){
						$("#list").append("<li><img src='"+product.ProduitImageUrl+"' alt='"+product.ProduitSNom+"'>"+product.ProduitSMarque + " - " +
							product.ProduitSNom + " - " +
							product.Contenance +" : Ajouté à votre liste de course</li>");
						$("#ProductId").val("");
						$("#ProductId").focus();
					}, function (an) {
						console.log("Erreur : \n"+JSON.stringify(an));
					});
					product = {ProduitSId : null, ProduitSNom : null,ProduitSMarque : null, FrigoNom : null,ProduitImageUrl : null,ListeNote : null,Contenance : null };
				}else{
					$("#list").append("<li>Produit non trouvé : "+barcode+"<br/>N'hésitez pas à aller l'<a href='http://fr.openfoodfacts.org/comment-ajouter-un-produit'>ajouter dans la base de données</a></li>");
					$("#ProductId").val("");
					$("#ProductId").focus();
				}
			}, apiError);
		}else{
			alert("ce type de scan n'existe pas");
		}
	});
}
function addEventsProducts(){

}
function addEventsProductsList(){
	var type = [];
	for(var i = 0;i<list.length;i++){
		if(type.indexOf(list[i].ProduitNSType)==-1){
			type.push(list[i].ProduitNSType);
		}
	}
	for(var i = 0;i<type.length;i++){
		$("#productType").append("<option value="+(i+1)+" >"+type[i]+"</option>");
	}
	$("#productType").on("change", function () {
		$("#search").val("");
		var newList=[];
		$("#list").html("<li></li>");
		if($("#productType option:selected").html()=="Tous"){
			newList = list;
		}else{
			for(var i = 0;i<list.length;i++){
				if($("#productType option:selected").html()==list[i].ProduitNSType){
					newList.push(list[i]);
				}
			}
		}
		for(var i = 0;i<newList.length;i++){
			$("#list").append("<li id="+newList[i].ProduitNSId+"><span class=\"ProduitNSNom\">"+newList[i].ProduitNSNomFR+"</span> - <span id='quantite'>0</span><a href=\"#\"><i class=\"minus fa fa-minus\" aria-hidden=\"true\"></i></a><a href=\"#\"><i class=\"plus fa fa-plus\" aria-hidden=\"true\"></i></a><a href=\"#\"><i class=\"remove fa fa-times\" aria-hidden=\"true\"></i></a></li>");
		}
		productAddQuantite();
	});
	$("#search").on("keyup", function () {
		$("#productType").val(0);
		$("#list").html("<li></li>");
		var search = [];
		var re;
		if($(this).val()==""){
			search = list;
		}else{
			for(var i = 0;i<list.length;i++){
				re = new RegExp($(this).val(),"gi");
				if(list[i].ProduitNSNomFR.match(re)){
					search.push(list[i]);
				}
			}
		}
		for(var i = 0;i<search.length;i++){
			$("#list").append("<li id="+search[i].ProduitNSId+"><span class=\"ProduitNSNom\">"+search[i].ProduitNSNomFR+"</span> - <span id='quantite'>0</span><a href=\"#\"><i class=\"minus fa fa-minus\" aria-hidden=\"true\"></i></a><a href=\"#\"><i class=\"plus fa fa-plus\" aria-hidden=\"true\"></i></a><a href=\"#\"><i class=\"remove fa fa-times\" aria-hidden=\"true\"></i></a></li>");
		}
		productAddQuantite();
	});
	$("form").on("submit", function (e) {
		e.preventDefault();
	});
	handleFridgeSelect("products");
	//Ajoute les actions sur les + - et x pour gérer les produits NS
	$("#list a i").on("click", function (e) {
		e.preventDefault();
		var action=$(this).attr("class").split(" ")[0];
		var productId = this.closest("li").id;
		var fridgeNam = $("#fridgesSelect option:selected").html();
		if(action=="remove"){
			//TODO add to list popup
			//TODO attendre que sof fasse la fonction (products/removeFromFridge ou products/setQuantity)
			console.log("I must remove " + productId + " from fridge : "+fridgeNam);
		}else if(action=="plus"){
			if($(this.closest("li")).children("#quantite").html()==0){
				// TODO resolve Unknown error in SQL with Sof
				apiRequest("POST", "products/addNS", {ProduitSId : $(this.closest("li")).attr("id"), ProduitSNom : $(this.closest("li")).children(".ProduitNSNom").html(), FrigoId: $("select").val()}, function (an) {
					$(this.closest("li")).children("#quantite").html(parseInt($(this.closest("li")).children("#quantite").html())+1);
				}, function (an) {
					alert("Erreur : \n"+JSON.stringify(an));
				});
			}else{
				//TODO resolve Unknown error in SQL with Sof
				apiRequest("POST", "fridges/plusOneProduct", {ProductSId : $(this.closest("li")).attr("id"), FrigoId: $("select").val()}, function (an) {
					$(this.closest("li")).children("#quantite").html(parseInt($(this.closest("li")).children("#quantite").html())+1);
				}, function (an) {
					alert("Erreur : \n"+JSON.stringify(an));
				});
			}
		}else if(action=="minus"){
			//TODO add to list popup si = 0 après click
			//TODO resolve Unknown error in SQL with Sof
			if($(this.closest("li")).children("#quantite").html()!=0){
				apiRequest("POST", "fridges/minusOneProduct", {ProductSId : $(this.closest("li")).attr("id"), FrigoId: $("#fridgesSelect").val()}, function (an) {
					$("#"+productId+" quantite").html(0);
					$(this.closest("li")).children("#quantite").html(parseInt($(this.closest("li")).children("#quantite").html())-1);
				}, function (an) {
					alert("Erreur : \n"+JSON.stringify(an));
				})
			}
		}else{
			console.log("No behavior set for this action : "+action);
		}
	});
}
function handleFridgeSelect(quantite=undefined){
	apiRequest("GET", "fridges/list", null, function(an){
		var select = $("#fridgesSelect");
		if($("#scanType").html()=="add"){
			for(var i = 0;i<an.length;i++){
				select.append("<option value='"+an[i].FrigoNom+"'>"+an[i].FrigoNom+"</option>");
			}
		}else{
			for(var i = 0;i<an.length;i++){
				select.append("<option value='"+an[i].FrigoId+"'>"+an[i].FrigoNom+"</option>");
			}
		}
		if(quantite){
			productAddQuantite();
		}
	}, function (an) {
		console.log("Erreur : \n"+JSON.stringify(an));
	});
}
function productAddQuantite(){
	apiRequest("POST", "fridges/getFridgeContent", {FrigoNom : $("#fridgesSelect option:selected").html()}, function(an){
		for(var i = 0;i<an.length;i++){
			$("#"+an[i].ProduitId+" #quantite").html(an[i].Quantite);
		}
	}, function(an){
		console.log(an);
	});
}
function listFridgeContent(){
	$("#list").html("<li></li>");
	var html = list.map(function(v, i, t){
		//TODO Error + - and x not showing
		$("#list").append("<li id="+t[i].ProduitId+"><span className='ProduitNom'>"+t[i].ProduitNom+"</span> - <span className='Quantite'>"+t[i].Quantite+"</span> - <span	className='DateAjout'>"+t[i].DateAjout+"</span><a href='#'><i className='minus fa fa-minus' aria-hidden='true'></i></a><a href='#'><i className='plus fa fa-plus' aria-hidden='true'></i></a><a href='#'><i className='remove fa fa-times' aria-hidden='true'></i></a></li>");
	});
}
function productsContent(){
	//TODO Make the function below work (display elements by myself)
	//TODO Find a way to know when its finished (list.length%20?)
	list = [];
	function getContent(j){
		apiRequest("POST", "products/getProductNS", {offset : j}, function(an){
			list = list.concat(an);
		}, apiError);
	}
	for(var i = 0;i<list.length;i++){
		console.log("ok");
		$("#list").append("<li>ok</li>");
	}
}
//TODO Fonction pour envoyer liste de courses par mail
