import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Animate, Icon, Spinner } from 'nordnet-ui-kit';
import cn from 'classnames';
import styleSheet from './Subsection.styles';

class Subsection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: this.props.toggled,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.toggled !== nextProps.toggled) {
      this.setState({
        toggled: nextProps.toggled,
      });
    }
  }

  toggle = () => this.setState({ toggled: !this.state.toggled });

  render() {
    const { title, children, loading, noPadding, classes } = this.props;
    const { toggled } = this.state;

    return (
      <div className={classes.subsection}>
        <button className={classes.title} onClick={this.toggle}>
          {title}
          <div className={classes.titleRight}>
            {loading ? <Spinner /> : null}
            <div className={cn(classes.mobile, classes.chevron)}>{toggled ? <Icon.ChevronUp /> : <Icon.ChevronDown />}</div>
          </div>
        </button>
        <Animate className={cn(classes.mobile, noPadding ? {} : classes.contentPadding)} type="height" estimatedHeight={180}>
          {toggled ? children : null}
        </Animate>
        <div className={cn(classes.desktop, noPadding ? {} : classes.contentPadding)}>{children}</div>
      </div>
    );
  }
}

Subsection.propTypes = {
  title: PropTypes.string,
  toggled: PropTypes.bool,
  children: PropTypes.node,
  loading: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  noPadding: PropTypes.bool,
};

Subsection.defaultProps = {
  title: '',
  toggled: false,
  children: '',
  loading: false,
  noData: false,
  noPadding: false,
};

const enhance = injectSheet(styleSheet);

export { Subsection as Component };

export default enhance(Subsection);
