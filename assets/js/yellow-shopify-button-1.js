
/*<![CDATA[*/
(function () {
    var scriptURL = 'assets/js/buy-button-storefront.min.js';
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
                node: document.getElementById('product-component-123'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
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
                                "width": "162px",
                                "color": "#432e2e",
                                "font-size": "16px",
                                "font-weight": "900",
                                "border": "none",
                                "padding": "4px",
                                "line-height": "normal",
                                "font-size": "18px",
                                ":hover": {
                                    "background-color": "yellow"
                                },
                                "background-color": "#e0fc00",
                                ":focus": {
                                    "background-color": "#d2ed07"
                                },
                                "border-radius": "6px",
                            },
                            "quantityInput": {
                                "font-size": "16px",
                                "padding-top": "16px",
                                "padding-bottom": "16px"
                            }
                        },
                        "buttonDestination": "checkout",
                        "contents": {
                            "img": false,
                            "title": false,
                            "price": false
                        },
                        "text": {
                            "button": "Buy Now"
                        }
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
                        },
                        "popup": false
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