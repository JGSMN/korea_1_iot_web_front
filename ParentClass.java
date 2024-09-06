package otherPackage;

public class ParentClass {
  // protected 속성과 메서드일 경우
  // >> 상속받은 클래스에서 다른 패키지더라도 접근 가능
  public String publicField; // 안녕하세요
  exampleMethod(); // 상속받은 클래스에서 호출 가능

  protected String protectedField;

  // == default ==
  public ParentClass() {
    this.protectedField = "안녕하세요";
  }

  protected void exampleMethod() {
    System.out.println("상속받은 클래스에서 호출 가능");
  }
}