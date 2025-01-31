/*<![CDATA[*/
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'unnifidata.myshopify.com',
            storefrontAccessToken: '3fef4814645741074a7affafd28934ad',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '7198016930024',
                node: document.getElementById('product-component-1633531980465'),
                moneyFormat: 'US$ {{amount}}',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            "button": {
                                "font-size": "16px",
                                "padding-top": "16px",
                                "padding-bottom": "16px",
                                ":hover": {
                                    "background-color": "#c02c50"
                                },
                                "background-color": "#711a2f",
                                ":focus": {
                                    "background-color": "#c02c50"
                                },
                                "border-radius": "40px",
                                "padding-left": "65px",
                                "padding-right": "65px"
                            },
                            "quantityInput": {
                                "font-size": "16px",
                                "padding-top": "16px",
                                "padding-bottom": "16px"
                            }
                        },
                        "contents": {
                            "img": false,
                            "title": false,
                            "price": false
                        },
                        "text": {
                            "button": "Add to cart"
                        },
                        "openCheckout": function (product) {
                            console.log('product checked out:: ', product);
                        },
                        "DOMEvents": {
                            'click .button': function (event) {
                                console.log('DOMEvent _buy now_ button clicked');
                            }
                        },
                        "beforeInit": function (component) {
                            console.log('before init..');
                        },
                        "updateQuantity": function (product) {
                            console.log('updateQuantity..');
                        },
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "font-size": "16px",
                                "padding-top": "16px",
                                "padding-bottom": "16px",
                                ":hover": {
                                    "background-color": "#c02c50"
                                },
                                "background-color": "#711a2f",
                                ":focus": {
                                    "background-color": "#c02c50"
                                },
                                "border-radius": "40px",
                                "padding-left": "65px",
                                "padding-right": "65px"
                            },
                            "quantityInput": {
                                "font-size": "16px",
                                "padding-top": "16px",
                                "padding-bottom": "16px"
                            }
                        },
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "option": {},
                    "cart": {
                        "styles": {
                            "button": {
                                "font-size": "16px",
                                "padding-top": "16px",
                                "padding-bottom": "16px",
                                ":hover": {
                                    "background-color": "#c02c50"
                                },
                                "background-color": "#711a2f",
                                ":focus": {
                                    "background-color": "#c02c50"
                                },
                                "border-radius": "40px"
                            }
                        },
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        }
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "background-color": "#711a2f",
                                ":hover": {
                                    "background-color": "#c02c50"
                                },
                                ":focus": {
                                    "background-color": "#c02c50"
                                }
                            },
                            "count": {
                                "font-size": "16px"
                            }
                        }
                    }
                },
            });
        });
    }
})();
/*]]>*/