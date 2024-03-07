## Next - Streaming

<img src="https://media.istockphoto.com/id/1402763474/photo/glass-lowercase-letter-n.webp?b=1&s=170667a&w=0&k=20&c=o6M7-ISejHoEpcnqeum5HZBPTomGg6DXakmtdpU7CwY=" alt="Next" width="350" />

### Setup

`npx create-next-app@latest`

---

without _Suspense_ page takes 6 seconds

```JavaScript
<main>
    <Component title="1" delay={2000} />
    <Component title="2" delay={4000} />
    <Component title="3" delay={6000} />
</main>
```

with _Suspense_ page loads progressively

```JavaScript
<main>
    <Suspense fallback={<p>Loading...</p>}>
        <Component title="1" delay={2000} />
    </Suspense>
</main>
```
