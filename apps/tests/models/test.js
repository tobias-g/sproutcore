// ==========================================================================
// Project:   TestRunner.Test
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals TestRunner */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
TestRunner.Test = SC.Record.extend(
/** @scope TestRunner.Test.prototype */ {

  primaryKey: "link_test",
  
  filename: SC.Record.attr(String),
  
  testUrl: SC.Record.attr(String, { key: "link_test" })

}) ;
