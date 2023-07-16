import React from 'react';
import BEMHelper from 'react-bem-helper';
import Tag from 'components/Tag';
import Button from 'components/Button';
import {
  RecentlyBought1,
  LogoPaypal,
  IconBag,
  LogoVisa,
  LogoMastercard,
  LogoAmericanExpress,
} from 'assets/images';
import 'components/CartPage/_cartPage.scss';

const className = BEMHelper('cart-page');

const CartPage: React.FC = () => {
  return (
    <div {...className('')}>
      <div {...className('header')}>
        <div>
          <p {...className('header-title')}>Shopping bag (2)</p>
          <p {...className('header-subtitle')}>
            <a href="#">Sign in</a> to sync your bag across your devices.
          </p>
        </div>
        <div {...className('header-contact')}>
          <p {...className('header-help')}>Need help? +1-562-926-5672</p>
          <div {...className('header-contact-chat-wrapper')}>
            <a href="#">Let's chat</a>
          </div>
        </div>
      </div>
      <div {...className('main-section')}>
        <div {...className('order-list')}>
          <div {...className('order-list-header')}>
            <span>Item</span>
            <span>Price</span>
          </div>
          <div {...className('order-list-item')}>
            <div {...className('order-list-item-image-wrapper')}>
              <img src={RecentlyBought1} alt="asdasd" />
            </div>
            <div {...className('order-list-item-details-wrapper')}>
              <div {...className('order-list-item-details-header')}>
                <div {...className('order-list-item-badge')}>
                  <img src={IconBag} alt="" />
                  <span {...className('order-list-item-badge-text')}>
                    Don't miss out!
                  </span>
                  <span>Add to bag 23 times in the last 48hrs</span>
                </div>
                <span {...className('order-list-price')}>1,400 Php</span>
              </div>
              <div {...className('order-list-body')}>
                <div {...className('order-list-item-tag-wrapper')}>
                  <Tag variant="secondary" size="small">
                    Best seller
                  </Tag>
                </div>
                <span {...className('order-list-item-detail-name')}>Name</span>
                <span {...className('order-list-item-detail-brand')}>
                  Brand
                </span>
                <span {...className('order-list-item-detail-attributes')}>
                  Size: S, Color: Multicolor, Qty: 1
                </span>
                <span {...className('order-list-item-detail-style')}>
                  Style No. BROR-RRORO
                </span>
              </div>
              <div {...className('order-list-footer')}>
                <a {...className('order-list-footer-link')} href="#">
                  save for later
                </a>
                <a {...className('order-list-footer-link')} href="#">
                  move to favorites
                </a>
                <a {...className('order-list-footer-link')} href="#">
                  remove
                </a>
                <a {...className('order-list-footer-link')} href="#">
                  edit
                </a>
              </div>
            </div>
          </div>
          <div {...className('order-list-payment-methods')}>
            <p>
              Free Shipping on orders of US$ 100 or more 30 day price match
              guarantee
            </p>
            <div {...className('order-list-footer-payment-icons')}>
              <img src={LogoVisa} alt="Visa" />
              <img src={LogoMastercard} alt="Mastercard" />
              <img src={LogoAmericanExpress} alt="American Express" />
              <img src={LogoPaypal} alt="Paypal" />
            </div>
          </div>
        </div>
        <div {...className('order-summary-section')}>
          <p {...className('order-summary-title')}>Order Summary</p>
          <div {...className('order-summary')}>
            <div {...className('order-summary-subtotal')}>
              <p {...className('order-summary-subtotal-detail')}>
                <span>Subtotal (2)</span>
                <span>6,300 Php</span>
              </p>
              <p {...className('order-summary-free-shipping')}>
                <span>
                  FREE shipping! <a href="#">details</a>
                </span>
                <span>0 Php</span>
              </p>
            </div>
            <div {...className('order-summary-total')}>
              <p {...className('order-summary-estimated-total')}>
                <span>Estimated Total</span>
                <span>6,300 Php</span>
              </p>
            </div>
            <p {...className('order-summary-vat-text')}>Vat included!</p>
          </div>
          <div {...className('order-summary-buttons')}>
            <Button rounded>Checkout as a guest</Button>
            <Button rounded>Sign in for faster checkout</Button>
            <Button rounded isPaymentBtn variant="white-bordered">
              <span {...className('paypal-button')}>
                <img src={LogoPaypal} alt="Paypal" />
                Checkout
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
