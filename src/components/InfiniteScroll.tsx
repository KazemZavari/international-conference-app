// import useInfiniteScroll from 'react-infinite-scroll-hook';

// function SimpleInfiniteList() {
//   const { loading, items, hasNextPage, error, loadMore } = useLoadItems();

//   const [sentryRef] = useInfiniteScroll({
//     loading,
//     hasNextPage,
//     onLoadMore: loadMore,
//     // When there is an error, we stop infinite loading.
//     // It can be reactivated by setting "error" state as undefined.
//     disabled: !!error,
//     // `rootMargin` is passed to `IntersectionObserver`.
//     // We can use it to trigger 'onLoadMore' when the sentry comes near to become
//     // visible, instead of becoming fully visible on the screen.
//     rootMargin: '0px 0px 400px 0px',
//   });

//   return (
//     <div>
//       {items.map((item) => (
//         <ListItem key={item.key}>{item.value}</ListItem>
//       ))}
//       {/* 
//           As long as we have a "next page", we show "Loading" right under the list.
//           When it becomes visible on the screen, or it comes near, it triggers 'onLoadMore'.
//           This is our "sentry".
//           We can also use another "sentry" which is separated from the "Loading" component like:
//             <div ref={sentryRef} />
//             {loading && <ListItem>Loading...</ListItem>}
//           and leave "Loading" without this ref.
//       */}
//       {(loading || hasNextPage) && (
//         <li ref={sentryRef}>
//           <Loading />
//         </ListItem>
//       )}
//     </div>
//   );
// }