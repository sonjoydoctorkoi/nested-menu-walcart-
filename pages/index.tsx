import {
  Box,
  CircularProgress,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useCategoryListQuery } from '../src/generated/graphql';
import { setCategoryList } from '../store/reducer';
import { Dispatch } from 'redux';
import { useAppDispatch } from '../store/hooks';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const actionDispatch = (dispatch: Dispatch) => ({
  setCategoryList: (page: any) => dispatch(setCategoryList(page)),
});
type ParentCategory = {
  __typename: string;
  name: string;
  uid: string;
};
interface Category {
  createdAt: string;
  inActiveNote: null;
  isActive: boolean;
  name: string;
  parent: ParentCategory;
  parents: ParentCategory[];
  uid: String;
  updatedAt: String;
  __typename: String;
}
const Home: NextPage = () => {
  const [row, setRow] = useState<number>(0);
  const { setCategoryList } = actionDispatch(useAppDispatch());
  const getData = useSelector((state: RootState) => state.category.data);

  const { data, error, loading } = useCategoryListQuery();

  const fetchData = () => {
    setCategoryList(data?.getCategories?.result);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }
  const list: Category[]  = getData?.categories;

  return (
    <div className={styles.container}>
      <Head>
        <title>Category</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul className={styles.dropdownmenu}>
        {/* <li className={`${styles.dropdownSubmenu} ${styles.active}`}>
          list
          <ArrowForwardIosIcon sx={{ float: 'right' }} />
          <ul className={`${styles.dropdownmenu} ${styles.nestedMenu}`}>
            <li>asdffa</li>
            <li>asdffa</li>
            <li>asdffa</li>
            <li>asdffa</li>
            <li>asdffa</li>
            <li className={`${styles.dropdownSubmenu} ${styles.active}`}>
              asdf
              <ArrowForwardIosIcon sx={{ float: 'right' }} />
              <ul className={`${styles.dropdownmenu} ${styles.nestedMenu}`} >
                <li>asdffa</li>
                <li>asdffa</li>
                <li>asdffa</li>
                <li>asdffa</li>
                <li>asdffa</li>
                <li>asdffa</li>
              </ul>
            </li>
          </ul>
        </li> */}
        {list
          ?.filter((res: Category) => res.isActive === true)
          .map((res: Category, key: number) => {
            return (
              <li
                className={`${
                  res.parents.length > 0 && styles.dropdownSubmenu
                } ${row === key && styles.active}`}
                key={key}
                onClick={() => setRow(key)}
              >
                {res.name}
                {res.parents.length > 0 && (
                  <>
                    <ArrowForwardIosIcon sx={{ float: 'right' }} />
                    {row === key ? (
                      <ul
                        key={key}
                        className={`${styles.dropdownmenu} ${styles.nestedMenu} `}
                      >
                        {res.parents.map((res: ParentCategory, key: number) => {
                          return <li key={key}>{res.name}</li>;
                        })}
                      </ul>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </li>
            );
          })}
      </ul>

      {/* <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',borderRight: '1px solid #ccc' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton sx={{position: 'absolute'}}>
        <ListItemText primary="Sent mail" />
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Inbox" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <div>

    </div>
<List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',positiion: 'relative',left:'370px',boxShadow: '10px 8px 10px #ccc' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemText primary="Sent mail" />
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Inbox" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List> */}
    </div>
  );
};

export default Home;
