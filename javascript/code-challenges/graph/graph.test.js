
/*
Write tests to prove the following functionality:

Node can be successfully added to the graph
An edge can be successfully added to the graph
A collection of all nodes can be properly retrieved from the graph
All appropriate neighbors can be retrieved from the graph
Neighbors are returned with the weight between nodes included
The proper size is returned, representing the number of nodes in the graph
A graph with only one node and edge can be properly returned
*/

'use strict';

const Graph = require('./Graph.js');

describe('Graph', () => {
  test('Node can be successfully added to the graph', () => {
    const g = new Graph();
    expect(g.size()).toBe(0);
    g.addVertex('A');
    expect(g.size()).toBe(1);
    g.addVertex('B');
    expect(g.size()).toBe(2);
  });

  test('An edge can be successfully added to the graph', () => {

  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {

  });

  test('All appropriate neighbors can be retrieved from the graph', () => {

  });

  test('Neighbors are returned with the weight between nodes included', () => {

  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {

  });

  test('A graph with only one node and edge can be properly returned', () => {

  });
})