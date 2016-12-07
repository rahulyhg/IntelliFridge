/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import SkyLight from 'react-skylight'; 
import logo from './logo.svg';
import $ from "jquery";
<<<<<<< HEAD
=======
import jwtDecode from "jwt-decode";
>>>>>>> master
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
				<div id="logo"><img src="./assets/images/dark-red/logo.svg"/></div>
				<div id="home">
					<a href="/">
						<img src="./assets/images/dark-red/home.svg"/>
					</a>
				</div>
			</div>
		);
	}
}

class Left extends Component {
	constructor(props){
		super(props);
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
						<img id="fridge-add" className="left-button" src="./assets/images/add-to-fridge.svg"/>
					</a>
					<a href="#" onClick={() => this.refs.popupRemoveItems.show()}>
						<img id="fridge-remove" className="left-button" src="./assets/images/remove-from-fridge.svg"/>
					</a>
				</div>
				<SkyLight hideOnOverlayClicked dialogStyles={itemsInOutPopupStyle} ref="popupAddItems" id="add-items-popup" className="popup items-in-out">
					<h1>Comment ?</h1>
					<div className="methods-buttons">
						<a href="#" className="method">
							<span onClick={() => this.refs.popupScan.show()}>
								<img src="./assets/images/barcode.svg"/>
								<h3>Scanner</h3>
							</span>
						</a>
						<a href="#" className="method">
							<span>
								<img src="./assets/images/hand.svg"/>
								<h3>Ajouter manuellement</h3>
							</span>
						</a>
					</div>
				</SkyLight>
				<SkyLight hideOnOverlayClicked dialogStyles={itemsInOutPopupStyle} ref="popupRemoveItems" id="remove-items-popup" className="popup items-in-out">
					<h1>Comment ?</h1>
					<div className="methods-buttons">
						<a href="#" className="method">
							<span>
								<img src="./assets/images/barcode.svg"/>
								<h3>Scanner</h3>
							</span>
						</a>
						<a href="#" className="method">
							<span>
								<img src="./assets/images/hand.svg"/>
								<h3>Retirer manuellement</h3>
							</span>
						</a>
					</div>
				</SkyLight>
				<SkyLight hideOnOverlayClicked dialogStyles={scanPopupStyle} ref="popupScan" id="send-method-popup" className="popup">
					<div className="send-fields">
						<div>
							<input type="text" name="new-fridge-name" placeholder="Scannez le code barre"/> <img src="./assets/images/dark-red/go-button.svg"/>
						</div>
					</div>
				</SkyLight>
				<SkyLight hideOnOverlayClicked dialogStyles={scanPopupStyle} ref="popupManual" id="send-method-popup" className="popup">
					<form action="">
						Tomates <input type="number" id="xx" value="0" min="0" max="25"/><br/>
						Pommes <input type="number" id="xx" value="0" min="0" max="25"/><br/>
						Oeufs <input type="number" id="xx" value="0" min="0" max="25"/>
					</form>
				</SkyLight>
			</div>  
		);
	}
}

class RightHome extends Component {
	constructor(props){
		super(props);
	}

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
					<div className="separator"></div>
					<a href="/list">
						<div id="view-list" className="right-button">
						    <i className="fa fa-search fa-4x" aria-hidden="true"></i>
						    <h3>Voir</h3>
						</div>
					</a>
					<a href="#" onClick={() => this.refs.popupSend.show()}>
						<div id="send-list" className="right-button">
						    <i className="fa fa-mobile fa-5x" aria-hidden="true"></i>
						    <h3>Envoyer</h3>
						</div>
					</a>
				</div>
				<SkyLight hideOnOverlayClicked dialogStyles={sendPopupStyle} ref="popupSend" id="send-method-popup" className="popup">
					<h1>Envoyer la liste par email ?</h1>
					<div className="send-fields">
						<div>
							<img src="./assets/images/dark-red/go-button.svg"/>
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
						<a href="#">
							<img src="./assets/images/dark-red/confirm-button.svg"/>
						</a>
					</div>
				</SkyLight>
				<SkyLight hideOnOverlayClicked dialogStyles={sendPopupStyle} ref="popupSend" id="send-method-popup" className="popup">
					<h1>Envoyer la liste par email ?</h1>
					<div className="send-fields">
						<div>
							<a href="#"><img src="./assets/images/dark-red/go-button.svg" onCLick={() => this.refs.popupListSent.show()}/></a>
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
	render() {
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
				<a href={"/fridgeContent/"+this.props.componentData.FrigoId}>
					<img src="./assets/images/fridge.svg"/>
					<h3>{this.props.componentData.FrigoNom}</h3>
				</a>
			</div>
		);
	}
}

class MiddleHome extends Component {
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
					<a href="#"><img src="./assets/images/dark-red/plus-button.svg" onClick={() => this.refs.popupAddFridge.show()}/></a>
					<a href="/settings"><img src="./assets/images/dark-red/gear-button.svg"/></a>
				</div>
				<SkyLight hideOnOverlayClicked dialogStyles={addFridgePopupStyle} ref="popupAddFridge" id="send-method-popup" className="popup">
					<div className="send-fields">
						<div>
							<input type="text" name="new-fridge-name" placeholder="nom du frigo"/> <img src="./assets/images/dark-red/go-button.svg"/>
						</div>
					</div>
				</SkyLight>
			</div>
		);
	}
}

<<<<<<< HEAD
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
		}

		return (
			<div id="middle-block" className="main-part">
				<h1>Paramètres</h1>
				<form id="settings">
					<label for="name">Nom :</label><input type="text" name="name" placeholder="nom"/><br/>
					<label for="surname">Prénom :</label><input type="text" name="surname" placeholder="prénom"/><br/>
					<label for="mail">Addresse e-mail :</label><input type="email" name="mail" placeholder="email"/><br/>
					<label for="language">Langue :</label><input type="text" name="language" placeholder="français" disabled/><br/>
					<label for="gender">Sexe :</label>
					<select>
					    <option value="h"><i class="fa fa-mars" aria-hidden="true"></i></option>
					    <option value="f"><i class="fa fa-venus" aria-hidden="true"></i></option>
				    </select><br/>
				    <label for="town">Ville :</label><input type="text" name="town" placeholder="ville"/>
				</form>
				<div id="buttons">
					<img src="./assets/images/dark-red/confirm-button.svg"/>
					<a href="#"><img src="./assets/images/dark-red/gear-button.svg" onClick={() => this.refs.popupAddFridge.show()}/></a>
				</div>
				<SkyLight hideOnOverlayClicked dialogStyles={addFridgePopupStyle} ref="popupAddFridge" id="send-method-popup" className="popup">
					<div className="send-fields">
						<div>
							<input type="text" name="new-fridge-name" placeholder="nom du frigo"/> <img src="./assets/images/dark-red/go-button.svg"/>
						</div>
					</div>
				</SkyLight>
			</div>
		);
	}
}

=======
>>>>>>> master
class FridgeContent extends Component {
	constructor(props){
		super(props);
		console.log(props.fridge);
		apiRequest("POST", "fridges/getFridgeContent", {FrigoNom : "Office"}, function(an){
			console.log(an);
			list = an;
			this.render();
		}, apiError);
	}

<<<<<<< HEAD
	_showDeleteModal(item) {
		//set item in context, ex:
		itemInContext = item;
		//then, open modal
		this.refs.popupRemoveItem.show();
	}

=======
>>>>>>> master
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
							<img src="./assets/images/dark-red/confirm-button.svg"/>
						</a>
					</div>
				</SkyLight>
			</ul>
		);
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
<<<<<<< HEAD
=======
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
							<img src="./assets/images/dark-red/confirm-button.svg"/>
						</a>
					</div>
				</SkyLight>
			</ul>
		);
	}
}

class ListElem extends Component {
	render() {
		return (
			<li id="this.props.componentData.ProduitId">{this.props.componentData.ProduitNom+" - "+this.props.componentData.Quantite+" - "+this.props.componentData.DateAjout} <a href="#"><i className="fa fa-times remove-item" aria-hidden="true" onClick={() => this.refs.popupRemoveItem.show()}></i></a></li>
		);
>>>>>>> master
	}

<<<<<<< HEAD
	_showDeleteModal(item) {
		//set item in context, ex:
		itemInContext = item;
		//then, open modal
		this.refs.popupRemoveItem.show();
=======
class MiddleList extends Component {
	constructor(){
		super();

	}
	render() {
		if(this.props.fridge){
			return (
				<div id="middle-block" className="main-part list-block">
					<h1>Name of the fridge</h1>
					<FridgeContent fridge={this.props.fridge} />
					<div id="add-item">
						<div id="mask"></div>
						<img src="./assets/images/dark-red/plus-button.svg"/>
					</div>
				</div>
			);
		}else{
			return (
				<div id="middle-block" className="main-part list-block">
					<h1>Ma liste</h1>
					<ShoppingList />
					<div id="add-item">
						<div id="mask"></div>
						<img src="./assets/images/dark-red/plus-button.svg"/>
					</div>
				</div>
			);
		}
	}
}

//START OF THE POPUPS

class PopupEmpty extends Component {
	render(){
		return (
			<div id="empty-list-popup" className="popup">
				<h1>Vider la liste ?</h1>
				<div id="confirm-buttons">
					<a href="#">
					<img src="./assets/images/dark-red/confirm-button.svg"/>
					</a>
					<a href="#">
						<img src="./assets/images/dark-red/X-button.svg" className="popup-x"/>
					</a>
				</div>
			</div>
		);  
>>>>>>> master
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
		return (
			<ul id="list">
				<li></li>
				{list.map((dynamicComponent, i) => <ListElem
					key = {i} componentData = {dynamicComponent}/>)}
				<SkyLight hideOnOverlayClicked dialogStyles={removeItemPopupStyle} ref="popupRemoveItem" id="empty-list-popup" className="popup">
					<h1>Retirer de la liste ?</h1>
					<div id="confirm-buttons">
						<a href="#">
							<img src="./assets/images/dark-red/confirm-button.svg"/>
						</a>
					</div>
				</SkyLight>
				<SkyLight hideOnOverlayClicked dialogStyles={quantityPopupStyle} ref="popupQuantity" id="send-method-popup" className="popup">
					<div className="send-fields">
						<div>
							<input type="text" name="quantity" placeholder="quantité"/> <img src="./assets/images/dark-red/go-button.svg"/>
						</div>
					</div>
				</SkyLight>
			</ul>
		);
	}
}

class ListElem extends Component {
	render() {
		return (
			<li id="$(this.props.componentData.ProduitId)">
				<a href="#" onClick={() => this.refs.popupQuantity.show()}>{this.props.componentData.ProduitNom+" - "+this.props.componentData.Quantite+" - "+this.props.componentData.DateAjout}</a>
				<a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a>
				<a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
				<a href="#"><i className="fa fa-times remove-item" aria-hidden="true" onClick={() => this._showPopupDelete}></i></a>
			</li>
		);
	}
}

class MiddleList extends Component {
	constructor(){
		super();

	}
	render() {
		if(this.props.fridge){
			return (
				<div id="middle-block" className="main-part list-block">
					<h1>Name of the fridge</h1>
					<FridgeContent fridge={this.props.fridge} />
					<div id="add-item">
						<div id="mask"></div>
						<img src="./assets/images/dark-red/plus-button.svg"/>
					</div>
				</div>
			);
		}else{
			return (
				<div id="middle-block" className="main-part list-block">
					<h1>Ma liste</h1>
					<ShoppingList />
					<div id="add-item">
						<div id="mask"></div>
						<img src="./assets/images/dark-red/plus-button.svg"/>
					</div>
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
		return (
			<div className="List">
				<TopPages />
				<div id="wrapper">
					<MiddleList fridge={this.props.params.FridgeId} />
					<RightList />
				</div>
			</div>
		);
	}
}

var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Home} />
		<Route path='/list' component={List} />
		<Route path='/fridgeContent/:FridgeId' component={List} />
<<<<<<< HEAD
		<Route path='/settings' component={Settings} />
=======
>>>>>>> master
	</Router>
);

/**************************************************************************
 ***********************Functions and JavaScript***************************
 *************************************************************************/
var apiBase;
var fridgesList, list=-1;
/**
 * Permet d'aller chercher les variables de session nécessaires
 * TODO remettre les vraies variables de session
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
	console.log(sData);
	var sJWT = {jwt:jwt.sign(sData, "wAMxBauED07a4GurMpuD", {header:{alg: 'HS256', typ: 'JWT'}})};
	//console.log(sJWT);
	request(type, "http://api.intellifridge.ovh/v1/"+url, sJWT, function(an){
		var decoded = jwt.decode(an, {complete: true});
		console.log("Réponse : \n"+an+"\nDécodée : \n"+JSON.stringify(decoded));
		if(decoded==null){
			alert("Erreur API");
			return -1;
		}
		if(decoded.payload.status==200){
			fs(decoded.payload.data);
		}else{
			fe(decoded.payload);
		}
	}, function(an){
		alert("Erreur d'API : \n\n"+an);
	});
}
function setFridgeList(data){
	fridgesList = data;
<<<<<<< HEAD
}

(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));
=======
}
>>>>>>> master
