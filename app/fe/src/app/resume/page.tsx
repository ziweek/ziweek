"use client";

import Header from "@/component/header";
import { useIsMobile } from "@/hook/useMediaQuery";
import {
  Tabs,
  Tab,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  DatePicker,
  Tooltip,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  SharedSelection,
  Accordion,
  AccordionItem,
  Textarea,
} from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { IconFire } from "@/component/common/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/component/footer";
import Image from "next/image";

export default function Home() {
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>("부가 기능");
  const [awardOption, setAwardOption] = useState<any>({
    awardValues: {
      cornerShape: "기본 테두리 1",
      title: "밤샘의 챔피언상",
      winner: "김야근",
      description:
        "별이 빛나는 밤에도 일을 놓지 않는 당신의 열정에 감사를 담아 이 상을 드립니다.",
      publisher: "야근 근절 위원회",
      date: `${today(getLocalTimeZone()).year}년 ${
        today(getLocalTimeZone()).month
      }월 ${today(getLocalTimeZone()).day}일`,
    },
    awardContent: [
      {
        key: "title",
        label: "상장 제목",
        placeholder: "밤샘의 챔피언상",
        max: 12,
        isValid: true,
      },
      {
        key: "winner",
        label: "수상자 이름",
        placeholder: "김야근",
        max: 10,
        isValid: true,
      },
      {
        key: "description",
        label: "상장 내용",
        placeholder:
          "별이 빛나는 밤에도 일을 놓지 않는 당신의 열정에 감사를 담아 이 상을 드립니다.",
        max: 120,
        isValid: true,
      },
      {
        key: "publisher",
        label: "발행자 이름",
        placeholder: "야근 근절 위원회",
        max: 12,
        isValid: true,
      },
    ],
    cornerShapeContent: [
      {
        key: "기본 테두리 1",
        src: `url(/images/award-template-1.png)`,
      },
      {
        key: "기본 테두리 2",
        src: `url(/images/award-template-2.png)`,
      },
      {
        key: "기본 테두리 3",
        src: `url(/images/award-template-3.png)`,
      },
      { key: "테두리 없음", src: `` },
    ],
  });
  const [modalOption, setModalOption] = useState({
    isTutorialOpen: true,
    tutorialContentIndex: 0,
    tutorialContent: [
      {
        title: "🏆 상장 만들기",
        desription: (
          <div className="space-y-2 select-none">
            <p>(1) 먼저 원하는 상장 템플릿을 선택하세요.</p>
            <p>(2) 선택한 템플릿에 제목 등을 입력합니다.</p>
            <p>(3) 상장 디자인을 확인하고 다운로드합니다.</p>
          </div>
        ),
      },
      {
        title: "👏 명예의 전당 살펴보기",
        desription: (
          <div className="space-y-2 select-none">
            <p>(1) 먼저 출품할 상장을 만듭니다.</p>
            <p>(2) 명예의 전당에 전송하기로 제출합니다.</p>
            <p>(3) 평가를 거쳐 우수한 작품은 전시됩니다.</p>
          </div>
        ),
      },
    ],
    isModalOpen: false,
    buttonSelected: "",
  });
  const [hallOfFame, setHallOfFame] = useState([
    {
      title: "커피 애호가상",
      winner: "이카페",
      description:
        "매일 아침 당신의 책상 위에서 빛나는 커피잔에게 이 상을 드립니다.",
      publisher: "카페인 중독자 협회",
      date: "2024년 7월 24일",
      ranking: 1,
      isLiked: true,
      countOfLike: 102,
      isCommented: true,
      season: "2024년 상반기",
    },
    {
      title: "점심시간 장인상",
      winner: "박점심",
      description:
        "점심시간마다 최고의 맛집을 찾아내는 당신의 능력에 감사를 담아 이 상을 드립니다.",
      publisher: "맛집 탐방 위원회",
      date: "2024년 7월 24일",
      ranking: 2,
      isLiked: true,
      countOfLike: 85,
      isCommented: false,
      season: "2024년 상반기",
    },
    {
      title: "회의의 달인상",
      winner: "정회의",
      description:
        "끝없는 회의에도 굴하지 않는 당신의 인내심에 감사를 담아 이 상을 드립니다.",
      publisher: "회의 혁신 위원회",
      date: "2024년 7월 24일",
      ranking: 3,
      isLiked: true,
      countOfLike: 42,
      isCommented: true,
      season: "2024년 상반기",
    },
  ]);

  // const queryawardOption = useQuery<any>({
  //   queryKey: ["awardOption"],
  //   queryFn: () => awardOption,
  //   refetchOnMount: true,
  // });

  useEffect(() => {
    AOS.init({ once: true, mirror: false });
    const checkResize = () => {
      if (isMobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    checkResize();
  }, [isMobile]);

  return (
    <>
      <section className="h-full min-h-screen w-full select-none flex-col justify-start items-center">
        <div
          className={`flex h-full w-full flex-col items-center justify-start gap-2 pb-6 pt-2 px-4 max-w-[600px] mx-auto`}
        >
          <Header></Header>
          <div className="w-full h-full flex flex-col gap-y-8">
            <div className="h-fit w-full">
              <Tabs
                variant={"bordered"}
                aria-label="Options"
                fullWidth
                color={"default"}
                size={"lg"}
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key)}
                radius={"none"}
                classNames={{ cursor: "bg-[#E6E6E7]" }}
              >
                {/* <>상장 만들기</> */}
                <Tab
                  key="상장 만들기"
                  title={
                    <Tooltip
                      content={"상장 만들기 탭"}
                      showArrow
                      isOpen={
                        modalOption.isTutorialOpen &&
                        modalOption.tutorialContentIndex == 0
                      }
                      placement={"bottom"}
                      color={"primary"}
                      size={"lg"}
                      className="max-w-[150px]"
                    >
                      <p>상장 만들기</p>
                    </Tooltip>
                  }
                >
                  <div>
                    <div className="flex flex-col gap-8 w-full items-center pt-4">
                      {/* <div
                        data-aos="fade-up"
                        data-aos-duration={300}
                        id="award"
                        className="relative w-[300px] aspect-[5/7] flex flex-col justify-center items-center p-8 py-10 h-[420px]"
                      >
                        <div
                          className="relative grid grid-cols-3 grid-rows-4 h-full gap-4 content-between z-10"
                          style={{
                            gridTemplateRows: "auto auto 1fr auto",
                          }}
                        >
                          <p className="col-span-3 w-full text-center text-xl font-light">
                            {awardOption.awardValues.title}
                          </p>
                          <p className="col-span-3 w-full text-right text-md font-light">
                            {awardOption.awardValues.winner}
                          </p>
                          <p className="col-span-3 w-full text-center self-center text-lg font-light">
                            {awardOption.awardValues.description}
                          </p>
                          <div className="flex flex-col w-full items-center col-span-3">
                            <p className="w-full text-center text-md font-light">
                              {awardOption.awardValues.publisher}
                            </p>
                            <p className="w-full text-center text-md font-light">
                              {awardOption.awardValues.date}
                            </p>
                          </div>
                        </div>
                        <div
                          className="absolute w-[200%] scale-50 z-0 aspect-[5/7] bg-contain flex flex-col justify-center items-center p-8 py-10 border-2 drop-shadow-sm"
                          style={{
                            backgroundImage:
                              awardOption.cornerShapeContent.filter(
                                (c: any) =>
                                  c.key == awardOption.awardValues.cornerShape
                              )[0].src,
                          }}
                        ></div>
                      </div> */}
                      <div className="bg-gradient-to-br from-[#0081FF] to-[#50B1FF] p-1 w-fit h-fit rounded-xl">
                        <Accordion
                          variant={"light"}
                          className="bg-white rounded-lg"
                        >
                          <AccordionItem
                            key="1"
                            aria-label="Gemma 모델 활용하기"
                            startContent={
                              <Image
                                src={"/logo/logo-gemma.png"}
                                width={100}
                                height={100}
                                alt="logo-gemma.png"
                                className="w-[60px]"
                              ></Image>
                            }
                            title="Gemma 모델 활용하기"
                            subtitle="Google Gemma 모델로 아이디어를 발굴해보는 것은 어떨까요?"
                            classNames={{
                              subtitle: "break-keep",
                            }}
                          >
                            <div className="flex space-y-4 flex-col w-full h-fit py-2">
                              <Textarea
                                radius={"sm"}
                                // minRows={3}
                                // maxRows={3}
                                variant={"flat"}
                                size={"lg"}
                                classNames={{
                                  inputWrapper:
                                    "bg-gradient-to-br from-[#0081FF10] to-[#50B1FF10]",
                                }}
                              ></Textarea>
                              <p className="text-center w-full text-xs">
                                🚧 아직 개발 중!
                              </p>
                              <Button
                                radius={"sm"}
                                variant={"faded"}
                                className="h-[60px] w-full bg-gradient-to-br from-[#0081FF] to-[#50B1FF] text-white font-bold border-0"
                                fullWidth
                                size={"lg"}
                                isLoading={false}
                                onPress={() => {
                                  // const target =
                                  //   document.getElementById("award");
                                  // if (!target) {
                                  //   return alert("저장에 실패");
                                  // }
                                  // html2canvas(target, {
                                  //   //   width: 2480,
                                  //   //   height: 3508,
                                  //   scale: 3,
                                  // }).then((canvas) => {
                                  //   const link = document.createElement("a");
                                  //   document.body.appendChild(link);
                                  //   link.href = canvas.toDataURL("image/png");
                                  //   link.download = "award.png"; // 다운로드 이미지 파일 이름
                                  //   link.click();
                                  //   document.body.removeChild(link);
                                  // });
                                }}
                              >
                                <p>Gemma, 정답을 알려줘!</p>
                              </Button>
                            </div>
                          </AccordionItem>
                        </Accordion>
                      </div>
                      {/*  */}
                      <AwardVertical awardOption={awardOption}></AwardVertical>
                      {/*  */}
                      <div className="w-full space-y-2 h-fit">
                        <p>상장 테두리 양식</p>
                        <Dropdown>
                          <DropdownTrigger>
                            <Button
                              // label={e.label}
                              // placeholder={e.placeholder}
                              // labelPlacement={"outside"}
                              // key={i}
                              // isClearable
                              radius={"none"}
                              variant={"faded"}
                              className="text-sm w-full"
                              fullWidth
                              size={"lg"}
                              // description={`${e.label}은 ${e.max}글자까지 입력이 가능합니다.`}
                              // onChange={(i: any) => {
                              //   if (i.target.value.length <= [e.max]) {
                              //     setAwardOption({
                              //       ...awardOption,
                              //       awardValues: {
                              //         ...awardOption.awardValues,
                              //         [e.key]: i.target.value,
                              //       },
                              //     });
                              //   }
                              // }}
                            >
                              {awardOption.awardValues.cornerShape}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            aria-label="Static Actions"
                            selectionMode={"single"}
                            disallowEmptySelection
                            selectedKeys={[awardOption.awardValues.cornerShape]}
                            onSelectionChange={(keys: SharedSelection) => {
                              setAwardOption({
                                ...awardOption,
                                awardValues: {
                                  ...awardOption.awardValues,
                                  cornerShape: keys.currentKey,
                                },
                              });
                            }}
                            className="w-full"
                          >
                            {awardOption.cornerShapeContent.map(
                              (e: any, i: number) => {
                                return (
                                  <DropdownItem key={e.key}>
                                    {e.key}
                                  </DropdownItem>
                                );
                              }
                            )}
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                      {awardOption.awardContent.map((e: any, i: number) => {
                        return (
                          <Input
                            label={e.label}
                            placeholder={e.placeholder}
                            labelPlacement={"outside"}
                            key={i}
                            isClearable
                            radius={"none"}
                            variant={"faded"}
                            className="text-sm w-full"
                            fullWidth
                            size={"lg"}
                            description={`${e.label}은 ${e.max}글자까지 입력이 가능합니다.`}
                            onChange={(i: any) => {
                              if (i.target.value.length <= [e.max]) {
                                setAwardOption({
                                  ...awardOption,
                                  awardValues: {
                                    ...awardOption.awardValues,
                                    [e.key]: i.target.value,
                                  },
                                });
                              }
                            }}
                          >
                            <div className="w-full h-full flex flex-row justify-between items-center font-bold">
                              <div>{e.icon}</div>
                              {e.text}
                              <div className="opacity-0">{e.icon}</div>
                            </div>
                          </Input>
                        );
                      })}
                      <DatePicker
                        label={"발행 일자"}
                        labelPlacement={"outside"}
                        radius={"none"}
                        variant={"faded"}
                        className="text-sm w-full"
                        fullWidth
                        size={"lg"}
                        defaultValue={today(getLocalTimeZone())}
                        onChange={(e: any) => {
                          setAwardOption({
                            ...awardOption,
                            awardValues: {
                              ...awardOption.awardValues,
                              date: `${e.year}년 ${e.month}월 ${e.day}일`,
                            },
                          });
                        }}
                      ></DatePicker>

                      <div className="flex flex-col space-y-4 w-full py-4">
                        <Button
                          radius={"none"}
                          variant={"faded"}
                          className="h-[60px] w-full bg-black text-white font-bold border-0"
                          fullWidth
                          size={"lg"}
                          onPress={() => {
                            const target = document.getElementById("award");
                            if (!target) {
                              return alert("저장에 실패");
                            }
                            html2canvas(target, {
                              //   width: 2480,
                              //   height: 3508,
                              scale: 3,
                            }).then((canvas) => {
                              const link = document.createElement("a");
                              document.body.appendChild(link);
                              link.href = canvas.toDataURL("image/png");
                              link.download = "award.png"; // 다운로드 이미지 파일 이름
                              link.click();
                              document.body.removeChild(link);
                            });
                          }}
                        >
                          <p>이미지로 저장하기</p>
                        </Button>
                        <Button
                          radius={"none"}
                          variant={"faded"}
                          className="h-[60px] w-full bg-[#FEE500] text-[#000000] font-bold border-0"
                          fullWidth
                          size={"lg"}
                          isLoading={false}
                          // isDisabled
                          onPress={() => {
                            const target = document.getElementById("award");
                            if (!target) {
                              return alert("저장에 실패");
                            }
                            html2canvas(target, {
                              //   width: 2480,
                              //   height: 3508,
                              scale: 3,
                            }).then(async (canvas) => {
                              var imgDataUrl = canvas.toDataURL("image/png");

                              var blobBin = atob(imgDataUrl.split(",")[1]); // base64 데이터 디코딩
                              var array = [];
                              for (var i = 0; i < blobBin.length; i++) {
                                array.push(blobBin.charCodeAt(i));
                              }
                              var file = await new File(
                                [new Uint8Array(array)],
                                "award.png",
                                { type: "image/png" }
                              );
                              await navigator
                                .share?.({
                                  title:
                                    "🏭 상장 공장에서 당신의 상장이 도착했어요!",
                                  text: "내 손으로 빚은 나만의 상장",
                                  files: [file],
                                })
                                .catch(console.error);
                            });
                            // Optionally virbrate slightly.
                            navigator.vibrate?.([30, 20, 10]);
                          }}
                        >
                          <p>다른 서비스에 공유하기</p>
                        </Button>
                        <Button
                          radius={"none"}
                          variant={"faded"}
                          className="h-[60px] w-full bg-orange-600 text-[#ffffff] font-bold border-0"
                          fullWidth
                          isDisabled
                          size={"lg"}
                        >
                          <p>명예의 전당에 제출하기</p>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab>
                {/* <>명예의 전당</> */}
                <Tab
                  key="명예의 전당"
                  title={
                    <Tooltip
                      content={"명예의 전당 탭"}
                      showArrow
                      isOpen={
                        modalOption.isTutorialOpen &&
                        modalOption.tutorialContentIndex == 1
                      }
                      placement={"bottom"}
                      color={"primary"}
                      size={"lg"}
                      className="max-w-[150px]"
                    >
                      <p>명예의 전당</p>
                    </Tooltip>
                  }
                >
                  <div className="flex flex-col items-center space-y-12 pt-4 pb-8">
                    {hallOfFame.map((e, i) => {
                      return (
                        <div
                          key={i}
                          data-aos="fade-up"
                          data-aos-duration={300 * (i + 1)}
                          className="flex flex-col items-center space-y-2"
                        >
                          <div className="flex flex-col items-center">
                            <p className="font-light">{e.season}</p>
                            <p className="font-light text-2xl">
                              {e.ranking == 1
                                ? "대상"
                                : e.ranking == 2
                                ? "우수상"
                                : "장려상"}
                            </p>
                          </div>
                          <div
                            id="award"
                            className="relative w-[300px] aspect-[5/7] flex flex-col justify-center items-center p-8 py-10 h-[420px]"
                          >
                            <div
                              className="relative grid grid-cols-3 grid-rows-4 h-full gap-4 content-between z-10"
                              style={{
                                gridTemplateRows: "auto auto 1fr auto",
                              }}
                            >
                              <p className="col-span-3 w-full text-center text-xl font-light">
                                {e.title}
                              </p>
                              <p className="col-span-3 w-full text-right text-md font-light">
                                {e.winner}
                              </p>
                              <p className="col-span-3 w-full text-center self-center text-lg font-light">
                                {e.description}
                              </p>
                              <div className="flex flex-col w-full items-center col-span-3">
                                <p className="w-full text-center text-md font-light">
                                  {e.publisher}
                                </p>
                                <p className="w-full text-center text-md font-light">
                                  {e.date}
                                </p>
                              </div>
                            </div>
                            <div
                              className="absolute w-[200%] scale-50 z-0 aspect-[5/7] bg-contain flex flex-col justify-center items-center p-8 py-10 border-2 drop-shadow-sm"
                              style={{
                                backgroundImage:
                                  awardOption.cornerShapeContent.filter(
                                    (c: any) =>
                                      c.key ==
                                      awardOption.awardValues.cornerShape
                                  )[0].src,
                              }}
                            ></div>
                          </div>
                          <div className="flex flex-row space-x-2 w-full items-center justify-center">
                            <Button
                              variant={"light"}
                              color={"default"}
                              size={"md"}
                            >
                              <div className="flex flex-row space-x-2 items-center justify-center">
                                <IconFire
                                  width={30}
                                  fill="#000"
                                  isActivated={e.isLiked}
                                ></IconFire>
                                <p className="text-xl font-light">
                                  {e.countOfLike}
                                </p>
                              </div>
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer
          title={"상장 공장"}
          subtitle={"저와 소통하실 분은 아래에서 만나요!"}
        ></Footer>
      </section>
      {/* <>튜토리얼</> */}
      <Modal isOpen={modalOption.isTutorialOpen} placement={"bottom"}>
        <ModalContent className={mobile ? "pb-6" : ""}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {
                  modalOption.tutorialContent[modalOption.tutorialContentIndex]
                    .title
                }
              </ModalHeader>
              <ModalBody>
                {
                  modalOption.tutorialContent[modalOption.tutorialContentIndex]
                    .desription
                }
              </ModalBody>
              <ModalFooter className="w-full flex flex-row items-stretch justify-center">
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    if (modalOption.tutorialContentIndex != 0) {
                      setModalOption({
                        ...modalOption,
                        tutorialContentIndex:
                          modalOption.tutorialContentIndex - 1,
                      });
                    }
                  }}
                  isDisabled={modalOption.tutorialContentIndex == 0}
                  size={"sm"}
                >
                  이전으로
                </Button>
                <Button
                  color={"default"}
                  variant={"light"}
                  onPress={() => {
                    setModalOption({ ...modalOption, isTutorialOpen: false });
                  }}
                  size={"sm"}
                >
                  넘어가기
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    if (
                      modalOption.tutorialContentIndex !=
                      modalOption.tutorialContent.length - 1
                    ) {
                      setModalOption({
                        ...modalOption,
                        tutorialContentIndex:
                          modalOption.tutorialContentIndex + 1,
                      });
                    } else {
                      setModalOption({
                        ...modalOption,
                        isTutorialOpen: false,
                      });
                    }
                  }}
                  // isDisabled={
                  //   modalOption.tutorialContentIndex ==
                  //   modalOption.tutorialContent.length - 1
                  // }
                  size={"sm"}
                  variant={
                    modalOption.tutorialContentIndex ==
                    modalOption.tutorialContent.length - 1
                      ? "solid"
                      : "light"
                  }
                >
                  {modalOption.tutorialContentIndex !=
                  modalOption.tutorialContent.length - 1
                    ? "다음으로"
                    : "시작하기"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

function AwardHorizontal(props: any) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={300}
      id="award"
      className="relative w-[250px] aspect-[7/5] flex flex-col justify-center items-center py-4"
    >
      <div
        className="relative grid grid-cols-3 grid-rows-4 h-fit gap-4 content-between z-10"
        style={{
          gridTemplateRows: "auto auto auto auto",
        }}
      >
        <p className="col-span-3 w-full text-center text-xl font-light">
          {props.awardOption.awardValues.title}
        </p>
        <p className="col-span-3 w-full text-right text-md font-light">
          {props.awardOption.awardValues.winner}
        </p>
        <p className="col-span-3 w-full text-center self-center text-lg font-light">
          {props.awardOption.awardValues.description}
        </p>
        <div className="flex flex-col w-full items-center col-span-3">
          <p className="w-full text-center text-md font-light">
            {props.awardOption.awardValues.publisher}
          </p>
          <p className="w-full text-center text-md font-light">
            {props.awardOption.awardValues.date}
          </p>
        </div>
      </div>
      <div
        className="absolute w-[200%] scale-50 z-0 aspect-[5/7] bg-contain flex flex-col justify-center items-center p-8 py-10 border-2 drop-shadow-sm rotate-90"
        style={{
          backgroundImage: props.awardOption.cornerShapeContent.filter(
            (c: any) => c.key == props.awardOption.awardValues.cornerShape
          )[0].src,
        }}
      ></div>
    </div>
  );
}
function AwardVertical(props: any) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={300}
      id="award"
      className="relative w-[300px] aspect-[5/7] flex flex-col justify-center items-center p-8 py-10 h-[420px]"
    >
      <div
        className="relative grid grid-cols-3 grid-rows-4 h-full gap-4 content-between z-10"
        style={{
          gridTemplateRows: "auto auto 1fr auto",
        }}
      >
        <p className="col-span-3 w-full text-center text-xl font-light">
          {props.awardOption.awardValues.title}
        </p>
        <p className="col-span-3 w-full text-right text-md font-light">
          {props.awardOption.awardValues.winner}
        </p>
        <p className="col-span-3 w-full text-center self-center text-lg font-light">
          {props.awardOption.awardValues.description}
        </p>
        <div className="flex flex-col w-full items-center col-span-3">
          <p className="w-full text-center text-md font-light">
            {props.awardOption.awardValues.publisher}
          </p>
          <p className="w-full text-center text-md font-light">
            {props.awardOption.awardValues.date}
          </p>
        </div>
      </div>
      <div
        className="absolute w-[200%] scale-50 z-0 aspect-[5/7] bg-contain flex flex-col justify-center items-center p-8 py-10 border-2 drop-shadow-sm"
        style={{
          backgroundImage: props.awardOption.cornerShapeContent.filter(
            (c: any) => c.key == props.awardOption.awardValues.cornerShape
          )[0].src,
        }}
      ></div>
    </div>
  );
}
