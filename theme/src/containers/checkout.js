import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MetaTags from '../components/metaTags';
import OrderSummary from '../components/orderSummary';
import CheckoutForm from '../components/checkoutForm';

class CheckoutContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			state: { pageDetails }
		} = this.props;
		return (
			<Fragment>
				<MetaTags
					title={pageDetails.meta_title}
					description={pageDetails.meta_description}
					canonicalUrl={pageDetails.url}
					ogTitle={pageDetails.meta_title}
					ogDescription={pageDetails.meta_description}
				/>

				<section className="section section-checkout">
					<div className="container">
						<div className="columns columns-checkout">
							<div className="column is-5-widescreen is-offset-1-widescreen is-6-desktop">
								<OrderSummary {...this.props} />
							</div>
							<div className="column is-6-widescreen is-6-desktop">
								<CheckoutForm {...this.props} />
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		);
	}
}

CheckoutContainer.propTypes = {
	state: PropTypes.shape({
		pageDetails: PropTypes.shape({})
	}).isRequired
};

export default CheckoutContainer;
