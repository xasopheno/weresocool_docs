import React, { useState } from 'react';
import { Burger } from '../../menu';
import { MenuItem, StyledMenu, SelectedMenuItem } from './Menu.styled';
import { capitalize, useStopAndWait } from '../../../utils/misc';
import { useRouter } from 'next/router';
import { MobileStyledMenu } from './MobileMenu.styled';
import { useWindowSize } from '../../../utils/useWindowSize';
import { isTranslation, MenuDatum } from '../menus';

const MenuSection = (props: {
  data: MenuDatum;
  onClick: (path: string) => void;
  locale: string;
}) => {
  const section = props.data;
  const router = useRouter();
  const { locale } = useRouter();
  const current = router.asPath.split('/').slice(-1)[0];

  return (
    <div>
      <h1
        style={{
          fontSize: '20px',
        }}
      >
        {section.title}
      </h1>
      {section.items.map((item, idx) => {
        let itemName: string;
        let itemLink: string;
        if (typeof item === 'string') {
          itemName = item;
          itemLink = item;
        } else if (isTranslation(item)) {
          itemName =
            locale && locale in item.trans
              ? item.trans[locale]
              : item.trans['en'];
          itemLink = item.link;
        } else {
          itemName = item.name;
          itemLink = item.link;
        }
        return (
          <MenuItem
            key={idx}
            selected={current === itemLink}
            onClick={() => props.onClick(itemLink)}
          >
            {current === itemLink && <SelectedMenuItem />}
            {`${capitalize(itemName)}`}
          </MenuItem>
        );
      })}
    </div>
  );
};

interface SizedMenuProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
  open: boolean;
}

const SizedMenu = ({ children, open }: SizedMenuProps): React.ReactElement => {
  const { isMobile } = useWindowSize();
  if (isMobile) {
    return <MobileStyledMenu open={open}>{children}</MobileStyledMenu>;
  } else {
    return <StyledMenu>{children}</StyledMenu>;
  }
};

interface MenuProps extends React.HTMLAttributes<Element> {
  data: MenuDatum[];
  sectionPath: string;
  locale: string;
}

const Menu = (props: MenuProps) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [open, setOpen] = useState(false);
  const { isMobile } = useWindowSize();

  return (
    <div>
      {isMobile && <Burger open={open} setOpen={setOpen} />}
      <SizedMenu open={open}>
        <button
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: 'en' })
          }
        >
          English
        </button>
        <button
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: 'pt' })
          }
        >
          Portuguêse
        </button>
        <MenuInner
          setOpen={setOpen}
          data={props.data}
          sectionPath={props.sectionPath}
          locale={props.locale}
        />
      </SizedMenu>
    </div>
  );
};

interface MenuInnerProps extends React.HTMLAttributes<Element> {
  data: MenuDatum[];
  sectionPath: string;
  locale: string;
  setOpen?: (open: boolean) => void;
}

export const MenuInner = (props: MenuInnerProps) => {
  const router = useRouter();
  const stopAndWait = useStopAndWait();
  return (
    <div>
      {props.data.map((section, i) => {
        return (
          <MenuSection
            key={i}
            data={section}
            locale={props.locale}
            onClick={async (path: string) => {
              await stopAndWait();
              router.push(`/${props.sectionPath}/${path}`);

              props.setOpen && props.setOpen(false);
            }}
          />
        );
      })}
    </div>
  );
};

export default Menu;
