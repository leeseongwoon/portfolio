import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // 필수 필드 검증
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식을 입력해주세요.' },
        { status: 400 }
      );
    }

    // 카카오메일 SMTP 설정
    const transporter = nodemailer.createTransport({
      host: 'smtp.kakao.com', // 카카오메일 공식 SMTP 서버
      port: 465,
      secure: true, // SSL 필수
      auth: {
        user: process.env.KAKAO_MAIL_USER, // 카카오메일 주소
        pass: process.env.KAKAO_MAIL_PASSWORD, // 앱 비밀번호
      },
    });

    // 이메일 내용 구성
    const mailOptions = {
      from: process.env.KAKAO_MAIL_USER,
      to: 'sw0523_dr@kakao.com', // 받는 사람
      subject: `[포트폴리오 문의] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            새로운 포트폴리오 문의가 도착했습니다
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">문의 정보</h3>
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>이메일:</strong> ${email}</p>
            <p><strong>제목:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #007bff; margin-top: 0;">메시지 내용</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #6c757d; font-size: 14px;">
            <p>이 이메일은 포트폴리오 웹사이트에서 자동으로 전송되었습니다.</p>
            <p>문의 시간: ${new Date().toLocaleString('ko-KR')}</p>
          </div>
        </div>
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: '이메일이 성공적으로 전송되었습니다!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('이메일 전송 오류:', error);
    
    // 더 자세한 오류 정보 제공
    let errorMessage = '이메일 전송에 실패했습니다.';
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = '이메일 또는 비밀번호가 올바르지 않습니다.';
      } else if (error.message.includes('ECONNECTION')) {
        errorMessage = '서버 연결에 실패했습니다. 네트워크를 확인해주세요.';
      } else if (error.message.includes('EAUTH')) {
        errorMessage = '인증에 실패했습니다. 계정 정보를 확인해주세요.';
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
