import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box } from '../atoms/Box';
import { Main } from '../atoms/Main';

export const Day = () => {
  const { id } = useParams();

  return (
    <Main css={{ maxHeight: '100vh' }}>
      <Box as="h1" css={{ margin: 0 }}>
        Entry for Day {id}
      </Box>
      <Box
        as="img"
        src="http://placekitten.com/g/200/300"
        alt="kitties"
        css={{ minHeight: '100px' }}
      />
      <Box css={{ overflowY: 'auto' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum
        <br />
        ligula, volutpat in fermentum eget, convallis eget lectus. Nam pretium
        <br />
        lacus eget ex pharetra vehicula. Aenean convallis arcu at neque finibus,
        <br />
        vel congue erat pharetra. Nunc iaculis, mi eget ultricies vestibulum,
        <br />
        mauris ex tristique diam, ut ullamcorper risus orci nec nibh. Mauris
        <br />
        pellentesque dolor libero, vitae euismod nisl rutrum ac. Vestibulum nec
        <br />
        vehicula lacus. Proin eu enim ut ipsum tempus tincidunt. Duis ornare
        <br />
        euismod ultricies. Nunc sem nunc, interdum sed mauris eu, laoreet
        <br />
        blandit sem. Duis sed accumsan ligula. Proin blandit, felis in varius
        <br />
        hendrerit, nisi elit molestie purus, malesuada sagittis odio magna non
        <br />
        justo. Fusce sit amet elementum erat, et tristique est. Duis ut
        <br />
        sollicitudin mi. In hac habitasse platea dictumst. Nam consequat nisl
        <br />
        lacus. Nam laoreet quam est, quis tempor erat pharetra id. Nullam in
        <br />
        tristique mi, nec imperdiet sem. Vestibulum in placerat odio, at pretium
        <br />
        nisl. Donec tincidunt leo nec turpis elementum porttitor. Nunc elementum
        <br />
        tortor vel quam tincidunt sollicitudin. Aliquam sit amet luctus nulla.
        <br />
        Nullam enim ipsum, dapibus commodo semper nec, convallis et nisl.
        <br />
        Vestibulum eu turpis non tortor rhoncus aliquam vitae non ante.
        <br />
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        <br />
        fames ac turpis egestas. Cras non lobortis lectus. Sed nec lacinia quam.
        <br />
        Duis scelerisque odio vitae urna tristique consequat. Duis congue arcu
        <br />
        nec enim congue consectetur. Proin eu odio tellus. Aliquam erat
        <br />
        volutpat. Ut et odio augue. Nulla ornare pharetra aliquam. Integer
        <br />
        tellus sapien, tempus eu ipsum at, varius molestie ante. Class aptent
        <br />
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        <br />
        himenaeos. Aenean tincidunt imperdiet ipsum, sit amet facilisis velit
        <br />
        hendrerit quis. Praesent ultrices scelerisque nibh, ut lacinia ligula
        <br />
        bibendum non. Curabitur pretium tortor vel magna aliquet auctor quis
        <br />
        quis sapien. Nulla pharetra elit sit amet hendrerit aliquet.
        <br />
        Pellentesque eleifend justo eros. Phasellus ornare ante ligula, vitae
        <br />
        rutrum risus volutpat at. Donec ultrices erat sed massa condimentum
        <br />
        sagittis. Pellentesque commodo quis mi ut consequat. Donec ut suscipit
        <br />
        orci. In magna metus, varius non dapibus sit amet, vehicula in velit.
        <br />
        Aliquam molestie in diam non tristique. Integer varius tempor turpis, ac
        <br />
        molestie nunc vulputate ut. Orci varius natoque penatibus et magnis dis
        <br />
        parturient montes, nascetur ridiculus mus. Ut in purus quis lectus
        <br />
        elementum suscipit. Cras efficitur euismod purus, a porttitor sapien
        <br />
        interdum ac. Vivamus ac sem quam. Quisque dui lacus, auctor sit amet
        <br />
        interdum eget, consequat eget felis. Suspendisse potenti.
      </Box>
      <Box as={Link} to="/" css={{ color: 'white' }}>
        Back
      </Box>
    </Main>
  );
};
