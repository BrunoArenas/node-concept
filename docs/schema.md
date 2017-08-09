
## <a name="resource-resource">Resource</a>

Stability: `prototype`

Node Concept API

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when resource was created | `"2015-01-01T12:00:00Z"` |
| **description** | *string* | description of resource | `"example"` |
| **id** | *uuid* | unique identifier of resource | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of resource | `"example"` |
| **updated_at** | *date-time* | when resource was updated | `"2015-01-01T12:00:00Z"` |

### <a name="link-POST-resource-/resources">Resource Create</a>

Create a new resource.

```
POST /resources
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **name** | *string* |  | `"example"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **description** | *string* |  | `"example"` |


#### Curl Example

```bash
$ curl -n -X POST http://localhost:5000/resources \
  -d '{
  "name": "example",
  "description": "example"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "description": "example",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### <a name="link-DELETE-resource-/resources/{(%23%2Fdefinitions%2Fresource%2Fdefinitions%2Fidentity)}">Resource Delete</a>

Delete an existing resource.

```
DELETE /resources/{resource_id}
```


#### Curl Example

```bash
$ curl -n -X DELETE http://localhost:5000/resources/$RESOURCE_ID \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "description": "example",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### <a name="link-GET-resource-/resources/{(%23%2Fdefinitions%2Fresource%2Fdefinitions%2Fidentity)}">Resource Info</a>

Info for existing resource.

```
GET /resources/{resource_id}
```


#### Curl Example

```bash
$ curl -n http://localhost:5000/resources/$RESOURCE_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "description": "example",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### <a name="link-GET-resource-/resources">Resource List</a>

List existing resources.

```
GET /resources
```


#### Curl Example

```bash
$ curl -n http://localhost:5000/resources
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2015-01-01T12:00:00Z",
    "description": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### <a name="link-PATCH-resource-/resources/{(%23%2Fdefinitions%2Fresource%2Fdefinitions%2Fidentity)}">Resource Update</a>

Update an existing resource.

```
PATCH /resources/{resource_id}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **description** | *text* |  |  |
| **name** | *string* |  | `"example"` |


#### Curl Example

```bash
$ curl -n -X PATCH http://localhost:5000/resources/$RESOURCE_ID \
  -d '{
  "name": "example",
  "description": null
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "description": "example",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


