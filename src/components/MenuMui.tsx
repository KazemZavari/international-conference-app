import ArrowDownIcon from "@mui/icons-material/ArrowRight";

const menuItems = [
  {
    menuItem: "home",
    subMenu: [],
  },
  {
    menuItem: "page-1",
    subMenu: [],
  },
  {
    menuItem: (
      <div className="flex group ">
        {" "}
        pageTow{" "}
        <ArrowDownIcon className="ml-1 group-hover:rotate-180 duration-500 " />
      </div>
    ),
    subMenu: [
      {
        menuItem: "menu 3.1",
      },
      {
        menuItem: "menu 3.2",
      },
      {
        menuItem: "menu 3.3",
      },
    ],
  },
];

type MenuItemProps = {
  data: any;
  subMenuItem: string;
};

const MenuItemWithSubMenuAccordion: React.FC<MenuItemProps> = ({ data }) => {
  const { menuItem, subMenu } = data || {};

  return (
    <>
      <div id={menuItem} className="inline-flex ml-20 ">
        {subMenu.length === 0 ? (
          menuItem
        ) : (
          <div className="group">
            <div >{menuItem}</div>

            <div className="hidden group-hover:block">
              {subMenu.map((subMenuItem: any) => (
                <li key={subMenuItem}>{subMenuItem.menuItem}</li>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default function BasicMenu() {
  return (
    <div className="ml-10 bg-red-500">
      {menuItems.map((data, i) => (
        <MenuItemWithSubMenuAccordion key={i} data={data} subMenuItem={""} />
      ))}
    </div>
  );
}
