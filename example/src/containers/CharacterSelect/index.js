import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Flex } from '@rebass/grid';

import Character from 'components/character';
import Nui from '../../util/Nui';

class CharacterSelect extends React.Component {
  selectCharacter = id => () => {
    Nui.send('SELECT_CHARACTER', { id });
  };

  render() {
    const { hidden, characters } = this.props;
    if (hidden) {
      return null;
    }
    return (
      <Flex>
        {characters.map(c => (
          <Character key={c.id} onSelect={this.selectCharacter(c.id)} {...c} />
        ))}
      </Flex>
    );
  }
}

CharacterSelect.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  hidden: state.characters.hidden,
  characters: state.characters.characters,
});

export default connect(mapStateToProps)(CharacterSelect);

/// #if DEBUG

// Emulate a client event during local testing.

setTimeout(() => {
  Nui.emulate('RECIEVE_CHARACTERS', {
    characters: [
      {
        id: 1,
        forename: 'Joe',
        surname: 'Bloggs',
        description: 'Recently signed a Mixer contract.',
        balance: 1000,
      },
      {
        id: 2,
        forename: 'John',
        surname: 'Everyman',
        description: 'Author of Roleplaying 101.',
        balance: 20320732,
      },
    ],
  });
}, 100);

/// #endif
