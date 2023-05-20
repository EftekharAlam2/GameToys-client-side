import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");

  return (
    <div className="max-w-full mx-1 md:mx-10 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">
            Question: What is an access token and refresh token? How do they
            work and where should we store them on the client-side?
          </h2>
          <p className="text-gray-700">
            Answer: <br /> Access Token and Refresh Token are commonly used in
            authentication systems to manage user sessions and improve security.{" "}
            <br />
            When a user logs in or authenticates, the server issues both an
            Access Token and a Refresh Token. The Access Token is used for
            short-term authorization, while the Refresh Token is used for
            long-term authorization. The Access Token is sent with each request
            to access protected resources. If the Access Token expires, the
            client can use the Refresh Token to request a new Access Token
            without requiring the user to log in again. The Refresh Token is
            sent to a dedicated endpoint on the server, and if valid, the server
            returns a new Access Token. <br />
            Access Tokens should be stored on the client-side, typically in
            memory or a secure storage mechanism. Refresh Tokens, being
            long-lived and more sensitive, should be stored in a more secure
            manner, such as HTTP-only cookies or secure storage mechanisms.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">
            Question: Compare SQL and NoSQL databases?
          </h2>
          <p className="text-gray-700">
            Answer: <br />
            SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
            different types of database management systems that differ in their
            data models, query languages, scalability, and use cases. <br />
            SQL databases are based on a relational data model. They use
            structured schemas and store data in tables with predefined
            relationships between them. On the other hand, NoSQL databases have
            a flexible and schema-less data model. They can store data in
            various formats like key-value pairs, documents, wide-column stores,
            or graphs. No predefined relationships are required. SQL databases
            use SQL as the standard query language for managing and querying
            data. SQL provides powerful declarative querying capabilities with
            support for complex joins, aggregations, and data manipulation
            operations. Though, NoSQL databases use different query languages
            depending on the database type. For example, document-based NoSQL
            databases may use JSON-based query languages, while key-value stores
            use simple read/write operations. <br />
            It&apos;s important to note that SQL and NoSQL databases are not
            mutually exclusive, and the choice between them depends on specific
            requirements, data characteristics, scalability needs, and
            development preferences.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">
            Question: What is express js? What is Nest JS?
          </h2>
          <p className="text-gray-700">
            Answer: <br /> Express.js and Nest.js are both popular web
            application frameworks for Node.js. <br /> Express.js is a minimal
            and flexible web application framework for Node.js. It provides a
            set of simple and intuitive APIs to build web applications and APIs.
            Nest.js is a progressive, TypeScript-based web application framework
            built on top of Express.js. It is designed to provide a more
            structured and opinionated approach to building scalable and
            maintainable server-side applications. <br /> In summary, Express.js
            is a lightweight and flexible framework that offers a simple and
            unopinionated approach, while Nest.js is a structured and
            opinionated framework that provides additional features and
            architectural patterns for building scalable and maintainable
            applications.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">
            Question: What is MongoDB aggregate and how does it work?
          </h2>
          <p className="text-gray-700">
            Answer: <br />
            In MongoDB, the aggregate method is used for performing advanced
            data aggregation operations on collections. It allows us to process
            and transform data within the database using a pipeline of stages.
            Each stage in the pipeline performs a specific operation on the
            input documents and passes the results to the next stage. <br />
            The aggregate method takes an array of pipeline stages as its
            argument. Each stage represents an operation to be performed on the
            input documents. The input documents for the aggregate operation are
            typically the documents in a MongoDB collection. The pipeline stages
            are processed sequentially, with each stage taking the output of the
            previous stage as its input. Once all the stages in the pipeline
            have been processed, the final result is returned. That&apos;s how
            MongoDB aggregate works.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
