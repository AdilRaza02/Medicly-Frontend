# API Calls

There are 2 packed for call api are [axios](https://www.npmjs.com/package/axios) and [fetch](https://www.npmjs.com/package/fetch), in this project we use axios in our project.

---

#### Example

```js
import axios from '~/utils/axios';

// ----------------------------------------------------------------------

function ProductDetailsView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [product, setProduct] = useState([]);

  const getProduct = useCallback(async () => {
    try {
      const response = await axios.get('/api/product', {
        params: { productId }
      });
      if (isMountedRef.current) {
        setProduct(response.data.product);
      }
    } catch (err) {
      //
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return <div>{product.name}</div>;
}
```

#### Add fake data from Axios Mock Adapter

[Axios Mock adapter](https://github.com/ctimmerm/axios-mock-adapter#readme) that allows to easily mock requests.

```js
import faker from 'faker';
import mock from '~/utils/mock';

// ----------------------------------------------------------------------

let posts = [...Array(8)].map((blog, index) => {
  const setIndex = index + 1;
  return {
    id: `0feb2990-4210-4170-93a4-37e8f5958a18-${setIndex}`,
    cover: `/static/images/blog/cover_${setIndex}.jpg`,
    title: POST_TITLES[setIndex],
    description: faker.lorem.paragraph()
  };
});

mock.onGet('/api/blog/posts/all').reply(200, { posts });
```
