package Hello

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import scala.language.postfixOps
import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.core.protocol.Protocol
import io.gatling.core.structure.ChainBuilder

class HelloSimulation extends Simulation{

  val protocol = karateProtocol("/login/add" -> pauseFor("post" -> 10),
    "/login" -> pauseFor("get" -> 15),
    "/login/deleteAll" -> pauseFor("delete" -> 5),
    "/login/logout" -> pauseFor("get" -> 25))

  val create = scenario("login").exec(karateFeature("classpath:Hello/Hello.feature"))
  //for(users <- 1 to 1000 if users % 100 == 0) {
     setUp(create.inject(heavisideUsers(50) during (5 second)))
  //}


}
