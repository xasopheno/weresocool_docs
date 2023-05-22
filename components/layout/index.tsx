import { useRouter } from 'next/router';
import { Box, Grid, ThemeProvider } from 'theme-ui';
import { supportedLocaleFromLocale } from '../../utils/misc';
import { useWindowSize } from '../../utils/useWindowSize';
import { Menu } from '../menu';
import { MenuDatum } from '../menu/menus';
import { theme } from './theme';

export default function Layout({
  children,
  menuData,
  sectionPath,
}: {
  children: React.ReactNode;
  menuData: MenuDatum[];
  sectionPath: string;
}) {
  const { isMobile } = useWindowSize();
  const { locale } = useRouter();
  let currentLocal = supportedLocaleFromLocale(locale);

  return (
    <ThemeProvider theme={theme}>
      {isMobile ? (
        <Grid
          style={{
            marginLeft: '4%',
            marginRight: '4%',
          }}
          columns={[1]}
        >
          <Box style={{ overflowX: 'hidden', height: '100%' }}>{children}</Box>

          <Box>
            <Menu
              data={menuData}
              sectionPath={sectionPath}
              locale={currentLocal}
              style={{
                position: 'fixed',
                maxHeight: '100%',
                height: '100%',
                overflow: 'scroll',
              }}
            />
          </Box>
        </Grid>
      ) : (
        <Grid
          style={{
            marginLeft: '8%',
          }}
          columns={[2, '7fr 3fr']}
        >
          <Box
            style={{
              height: 'calc(100vh - 60px)',
              marginTop: '50px',
            }}
          >
            {children}
          </Box>

          <Box>
            <Menu
              data={menuData}
              sectionPath={sectionPath}
              locale={currentLocal}
              style={{
                overflow: 'scroll',
                paddingBottom: '2em',
              }}
            />
          </Box>
        </Grid>
      )}
    </ThemeProvider>
  );
}
